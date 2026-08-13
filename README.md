# Warble Future

Public marketing SPA for the next chapter of the Warble stack, plus a `/api/leads` endpoint that stores “request more information” inquiries.

## Pages

- `/` — Home
- `/products` — ShrikeOps, Heron Ops, Starling EX CE; enterprise private beta
- `/how-it-works` — Observe → Reason → Act
- `/contact` — Lead capture form

## Hosts

Cloudflare Pages project descriptions (from the domain briefs):

- `warblecloud-com` — WarbleCloud — cloud platform for real-time collaboration, AI-assisted workflows, and scalable infrastructure. Modern, developer-friendly SaaS.
- `warblecloud-ai` — WarbleCloud AI — AI-powered cloud services focused on intelligent automation, generative tools, and smart infrastructure management.
- `warblelabs-io` — Warble Labs — experimental R&D lab for AI, cloud, and emerging tech prototypes. Innovation and open experimentation hub.
- `frakma-io` — Frakma — next-generation platform for modular digital products and decentralized applications. Clean, high-performance web presence.
- `avirka-ai` — Avirka AI — AI-driven solutions for productivity, automation, and intelligent systems. Focused on practical, high-impact AI tools.
- `avrika-ai` — Avrika AI — original AI brand and platform for intelligent applications and research-driven AI products.

| Custom domain | Pages project | Default URL |
|---|---|---|
| https://warblecloud.com | `warblecloud-com` | https://warblecloud-com.pages.dev |
| https://warblecloud.ai | `warblecloud-ai` | https://warblecloud-ai.pages.dev |
| https://warblelabs.io | `warblelabs-io` | https://warblelabs-io.pages.dev |
| https://frakma.io | `frakma-io` | https://frakma-io.pages.dev |
| https://avirka.ai | `avirka-ai` | https://avirka-ai.pages.dev |
| https://avrika.ai | `avrika-ai` | https://avrika-ai.pages.dev |

`www` is attached on each domain that is already in this Cloudflare account.

Also still on the Worker:

- https://future.warblecloud.com
- https://warble-future.avinash-etrx.workers.dev

## Local

```bash
npm install
npx wrangler d1 create warble-future-leads   # first time; paste the id into wrangler.jsonc
npm run db:migrate:local
npm run dev
```

## Hosting

Primary host is **Railway** (`warble-future` project). Fallback URL:

https://warble-future-production.up.railway.app

```bash
railway up --yes --service warble-future
```

Cloudflare is DNS only for these apex/www names (CNAME to `*.up.railway.app`). The six Cloudflare Pages projects and the `warble-future` Worker were removed.

Leads land in the `warble-future-leads` D1 database. List recent rows:

```bash
npm run db:leads
```
