import { CORS_HEADERS, handleLead, json } from "./leads.js";

export default {
  async fetch(request, env, ctx) {
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
