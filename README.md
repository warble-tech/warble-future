# Warble Future

Public marketing SPA for the next chapter of the Warble stack, plus a `/api/leads` endpoint that stores “request more information” inquiries.

## Pages

- `/` — Home
- `/products` — Frakma, Avirka, Warble Cloud, Phronix
- `/how-it-works` — Observe → Reason → Act
- `/contact` — Lead capture form

## Hosts

Same Worker is attached to:

- `https://future.warblecloud.com`
- `https://future.warblecloud.ai`
- `https://future.warblelabs.io`
- `https://future.avirka.ai`
- `https://future.frakma.io`
- `https://future.warbleoss.org`

Apex sites are left untouched.

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
```

Leads land in the `warble-future-leads` D1 database. List recent rows:

```bash
npm run db:leads
```
