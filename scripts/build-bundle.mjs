import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const dir = path.join(root, "public");
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
};

const files = {};
for (const name of fs.readdirSync(dir)) {
  const ext = path.extname(name);
  const body = fs.readFileSync(path.join(dir, name), "utf8");
  files[`/${name}`] = { type: types[ext] || "application/octet-stream", body };
}
files["/"] = files["/index.html"];

const serve = `
    const file = FILES[url.pathname] || (url.pathname.startsWith("/api/") ? null : FILES["/"]);
    if (!file) return json({ ok: false, error: "Not found." }, 404);
    return new Response(file.body, {
      headers: { "Content-Type": file.type, "Cache-Control": "public, max-age=300" },
    });
`;

const worker = fs
  .readFileSync(path.join(root, "src/index.js"), "utf8")
  .replace("return env.ASSETS.fetch(request);", serve);

const out = `const FILES = ${JSON.stringify(files)};\n${worker}`;
const dest = path.join(root, ".wrangler-bundle.js");
fs.writeFileSync(dest, out);
console.log(dest, Buffer.byteLength(out));
