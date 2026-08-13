export const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME = 120;
const MAX_COMPANY = 160;
const MAX_ROLE = 120;
const MAX_MESSAGE = 2000;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT = 5;
const MAX_BODY_BYTES = 16 * 1024;

export function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...CORS_HEADERS,
    },
  });
}

export async function handleLead(request, env, ctx) {
  const declared = Number(request.headers.get("Content-Length") || 0);
  if (declared > MAX_BODY_BYTES) {
    return json({ ok: false, error: "Request too large." }, 413);
  }

  let body;
  try {
    const raw = await request.arrayBuffer();
    if (raw.byteLength > MAX_BODY_BYTES) {
      return json({ ok: false, error: "Request too large." }, 413);
    }
    body = JSON.parse(new TextDecoder().decode(raw));
  } catch {
    return json({ ok: false, error: "Send a JSON body." }, 400);
  }

  if (typeof body.website === "string" && body.website.trim() !== "") {
    return json({ ok: true });
  }

  const name = clean(body.name, MAX_NAME);
  const email = clean(body.email, 254).toLowerCase();
  const company = clean(body.company, MAX_COMPANY);
  const role = clean(body.role, MAX_ROLE);
  const interest = clean(body.interest, 80);
  const message = clean(body.message, MAX_MESSAGE);
  const page = clean(body.page, 120);

  if (name.length < 2) {
    return json({ ok: false, error: "Please enter your name." }, 400);
  }
  if (!EMAIL_RE.test(email)) {
    return json({ ok: false, error: "Please enter a valid work email." }, 400);
  }

  const ip =
    request.headers.get("CF-Connecting-IP") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown";
  const ipHash = await sha256(ip);
  const now = new Date();
  const windowStart = new Date(now.getTime() - RATE_WINDOW_MS).toISOString();

  try {
    const recent = await env.DB.prepare(
      "SELECT COUNT(*) AS n FROM leads WHERE ip_hash = ? AND created_at >= ?",
    )
      .bind(ipHash, windowStart)
      .first();

    if ((recent?.n ?? 0) >= RATE_LIMIT) {
      return json({ ok: false, error: "Too many requests. Please try again shortly." }, 429);
    }

    const id = crypto.randomUUID();
    const createdAt = now.toISOString();
    const host = request.headers.get("Host") || "";
    const userAgent = (request.headers.get("User-Agent") || "").slice(0, 400);

    await env.DB.prepare(
      `INSERT INTO leads
        (id, name, email, company, role, interest, message, source_host, page, user_agent, ip_hash, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    )
      .bind(id, name, email, company, role, interest, message, host, page, userAgent, ipHash, createdAt)
      .run();

    console.log(
      JSON.stringify({
        event: "lead_captured",
        id,
        email,
        company,
        interest,
        host,
        page,
      }),
    );

    ctx.waitUntil(notifyLead(env, { id, name, email, company, role, interest, message, host, createdAt }));

    return json({ ok: true, id });
  } catch (err) {
    console.error(JSON.stringify({ event: "lead_error", error: String(err) }));
    return json({ ok: false, error: "Could not save your request. Please email contact@warblecloud.com." }, 500);
  }
}

async function notifyLead(env, lead) {
  if (typeof env.EMAIL?.send !== "function") return;

  const to = env.NOTIFY_EMAIL || "contact@warblecloud.com";
  const text = [
    "New Warble Future inquiry",
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    `Company: ${lead.company || "—"}`,
    `Role: ${lead.role || "—"}`,
    `Interest: ${lead.interest || "—"}`,
    `Host: ${lead.host}`,
    `When: ${lead.createdAt}`,
    "",
    lead.message || "(no message)",
  ].join("\n");

  try {
    await env.EMAIL.send({
      to,
      from: { email: "leads@warblecloud.com", name: "Warble Future" },
      subject: `New lead: ${lead.name}${lead.company ? ` · ${lead.company}` : ""}`,
      text,
      html: `<pre style="font-family:ui-sans-serif,system-ui">${escapeHtml(text)}</pre>`,
    });
  } catch (err) {
    console.error(JSON.stringify({ event: "lead_notify_failed", error: String(err) }));
  }
}

function clean(value, max) {
  if (typeof value !== "string") return "";
  return value.replace(/\s+/g, " ").trim().slice(0, max);
}

async function sha256(value) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
