import { CORS_HEADERS, handleLead, json } from "./leads.js";

export default {
  async fetch(request, env, ctx) {
    try {
      return await route(request, env, ctx);
    } catch (error) {
      console.error(
        JSON.stringify({
          message: "unhandled error",
          error: error instanceof Error ? error.message : String(error),
          path: new URL(request.url).pathname,
        }),
      );
      return json({ ok: false, error: "Internal server error." }, 500);
    }
  },
};

async function route(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === "/api/leads") {
      if (request.method === "OPTIONS") {
        return new Response(null, { status: 204, headers: CORS_HEADERS });
      }
      if (request.method !== "POST") {
        return json({ ok: false, error: "Method not allowed." }, 405);
      }
      return handleLead(request, env, ctx);
    }

    if (url.pathname === "/api/health") {
      return json({ ok: true, service: "warble-future" });
    }

    return env.ASSETS.fetch(request);
  },
};
