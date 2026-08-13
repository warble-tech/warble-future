import { CORS_HEADERS, handleLead, json } from "../../src/leads.js";

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}

export async function onRequestPost(context) {
  return handleLead(context.request, context.env, context);
}

export async function onRequest() {
  return json({ ok: false, error: "Method not allowed." }, 405);
}
