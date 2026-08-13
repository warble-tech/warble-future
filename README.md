# Warble Future

Public marketing SPA for the next chapter of the Warble stack, plus a `/api/leads` endpoint that stores “request more information” inquiries.

## Pages

- `/` — Home
- `/products` — Frakma, Avirka, Warble Cloud, Phronix
- `/how-it-works` — Observe → Reason → Act
- `/contact` — Lead capture form

## Hosts

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

## Deploy

```bash
npm run db:migrate
npm run deploy
npm run deploy:pages
```

Leads land in the `warble-future-leads` D1 database. List recent rows:

```bash
npm run db:leads
```
