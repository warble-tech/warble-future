import { createServer } from "node:http";
import { readFile, appendFile, mkdir, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import { handleLead, json } from "./src/leads.js";

const root = join(fileURLToPath(new URL(".", import.meta.url)), "public");
const port = Number(process.env.PORT || 8080);
const dataDir = process.env.RAILWAY_VOLUME_MOUNT_PATH || join(fileURLToPath(new URL(".", import.meta.url)), "data");

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".ico": "image/x-icon",
};

const fileDb = {
  prepare() {
    return {
      bind(...args) {
        this._args = args;
        return this;
      },
      async first() {
        return { n: 0 };
      },
      async run() {
        const [
          id,
          name,
          email,
          company,
          role,
          interest,
          message,
          host,
          page,
          userAgent,
          ipHash,
          createdAt,
        ] = this._args;
        await mkdir(dataDir, { recursive: true });
        await appendFile(
          join(dataDir, "leads.jsonl"),
          `${JSON.stringify({
            id,
            name,
            email,
            company,
            role,
            interest,
            message,
            source_host: host,
            page,
            user_agent: userAgent,
            ip_hash: ipHash,
            created_at: createdAt,
          })}\n`,
          "utf8",
        );
        return { success: true };
      },
    };
  },
};

const MAX_BODY_BYTES = 16 * 1024;

function requestBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on("data", (c) => {
      size += c.length;
      if (size > MAX_BODY_BYTES) {
        reject(new Error("payload_too_large"));
        req.destroy();
        return;
      }
      chunks.push(c);
    });
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

function toWebRequest(req, body) {
  const host = req.headers.host || "localhost";
  const url = `http://${host}${req.url}`;
  const headers = new Headers();
  for (const [k, v] of Object.entries(req.headers)) {
    if (typeof v === "string") headers.set(k, v);
  }
  return new Request(url, { method: req.method, headers, body });
}

async function sendWebResponse(res, web) {
  res.statusCode = web.status;
  web.headers.forEach((value, key) => res.setHeader(key, value));
  const buf = Buffer.from(await web.arrayBuffer());
  res.end(buf);
}

async function serveStatic(req, res) {
  const url = new URL(req.url, "http://local");
  let path = decodeURIComponent(url.pathname);
  if (path === "/") path = "/index.html";
  const safe = normalize(path).replace(/^(\.\.[/\\])+/, "");
  const file = join(root, safe);
  if (!file.startsWith(root)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }
  try {
    await stat(file);
    const body = await readFile(file);
    res.writeHead(200, { "Content-Type": TYPES[extname(file)] || "application/octet-stream" });
    res.end(body);
  } catch {
    const index = await readFile(join(root, "index.html"));
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(index);
  }
}

const server = createServer(async (req, res) => {
  const url = new URL(req.url || "/", "http://local");
  try {
    if (url.pathname === "/api/health") {
      await sendWebResponse(res, json({ ok: true, service: "warble-future", host: "railway" }));
      return;
    }
    if (url.pathname === "/api/leads") {
      if (req.method === "OPTIONS") {
        res.writeHead(204, {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        });
        res.end();
        return;
      }
      if (req.method !== "POST") {
        await sendWebResponse(res, json({ ok: false, error: "Method not allowed." }, 405));
        return;
      }
      let body;
      try {
        body = await requestBody(req);
      } catch (err) {
        if (String(err.message) === "payload_too_large") {
          await sendWebResponse(res, json({ ok: false, error: "Request too large." }, 413));
          return;
        }
        throw err;
      }
      const webReq = toWebRequest(req, body);
      const env = { DB: fileDb, NOTIFY_EMAIL: process.env.NOTIFY_EMAIL || "contact@warblecloud.com" };
      const ctx = { waitUntil: (p) => Promise.resolve(p).catch(() => {}) };
      await sendWebResponse(res, await handleLead(webReq, env, ctx));
      return;
    }
    await serveStatic(req, res);
  } catch (err) {
    console.error(err);
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ ok: false, error: "Server error." }));
  }
});

server.listen(port, "0.0.0.0", () => {
  console.log(`warble-future listening on ${port}`);
});
