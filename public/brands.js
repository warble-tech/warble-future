const TAGLINE = "Enterprise software, built peacefully.";

const ENTITIES = [
  { name: "WarbleCloud LLC", place: "United States", short: "US", logo: "/logos/warble_bird_logo.svg" },
  { name: "ChirpStack LLP", place: "India", short: "India", logo: "/logos/chirpstack_icon.svg" },
];
const LEGAL = ENTITIES.map((e) => `${e.name} (${e.short})`).join(" · ");

const INTERESTS = [
  { value: "avirka-tiny-vllm", label: "Avirka — tiny vLLM / supervised" },
  { value: "reflexion-ai-beta", label: "Reflexion-AI — private beta" },
  { value: "frakma-ml-gitops", label: "Frakma — ML GitOps" },
  { value: "warble-labs", label: "Warble Labs — data and domain" },
  { value: "community-edition", label: "Community Edition" },
  { value: "other", label: "Other" },
];

const CARDS = [
  { tag: "Open", title: "Community Edition", body: "ShrikeOps, Heron Ops, and Starling EX. Self-host at warbleoss.org." },
  { tag: "Development", title: "Avirka", body: "Supervised learning. Lean-small models. Tiny vLLM, still in development." },
  { tag: "Closed", title: "Reflexion-AI", body: "Private beta is closed. A WarbleCloud AI product, not a services engagement." },
  { tag: "Evaluation", title: "Frakma", body: "ML GitOps production stack. Under evaluation with the Linux Foundation — membership, not a hosted project." },
];

const AVIRKA = {
  name: "Avirka",
  h1: "Supervised data. Small models. Tiny vLLM.",
  lede: "LLM development with ML discipline: labeled sets, an eval bar, and a serveable checkpoint. We stay small on purpose.",
  cta: "Talk about Avirka",
  interest: "avirka-tiny-vllm",
};

const BRANDS = {
  "warblecloud.com": {
    name: "WarbleCloud",
    h1: "We build products. We keep them small.",
    lede: "An AI-native product company. Supervised loops, tiny models, a September pipeline. Not a services catalog.",
    cta: "Write to us",
    interest: "avirka-tiny-vllm",
  },
  "warblecloud.ai": {
    name: "WarbleCloud AI",
    h1: "Reflexion-AI is in closed private beta.",
    lede: "We admit product seats, not staff-augmentation work. Community Edition remains open.",
    cta: "Request a seat",
    interest: "reflexion-ai-beta",
  },
  "warblelabs.io": {
    name: "Warble Labs",
    h1: "Start with the data and the domain.",
    lede: "Labels, language, and constraints first. Then a small model — not a generic agent demo.",
    cta: "Talk to Labs",
    interest: "warble-labs",
  },
  "frakma.io": {
    name: "Frakma",
    h1: "ML GitOps, under evaluation.",
    lede: "A production stack for models and pipelines as reviewed Git history. Silver Partner of the Linux Foundation — that is membership, not a claim that Frakma is an LF project.",
    cta: "Follow the evaluation",
    interest: "frakma-ml-gitops",
  },
  "avirka.ai": AVIRKA,
  "avrika.ai": {
    ...AVIRKA,
    name: "Avrika",
    h1: "The original mark. The same toolchain.",
    lede: "Avrika is the research-facing name. The product is Avirka: supervised, lean-small, tiny vLLM.",
  },
};

function brandKeyFromHost(host) {
  const preview = new URLSearchParams(window.location.search).get("host");
  if (preview && BRANDS[preview]) return preview;
  const h = (host || "").toLowerCase().replace(/^www\./, "").split(":")[0];
  if (BRANDS[h]) return h;
  if (h.includes("railway.app")) return "warblecloud.com";
  return Object.keys(BRANDS).find((k) => h.endsWith(`.${k}`)) || "warblecloud.com";
}

function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, (ch) => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]
  ));
}

function applyBrand() {
  const key = brandKeyFromHost(window.location.hostname);
  const brand = BRANDS[key];
  document.title = `${brand.name} — ${TAGLINE}`;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", `${brand.lede} ${LEGAL}`);

  document.querySelectorAll("[data-brand-name], [data-brand-short]").forEach((el) => {
    el.textContent = brand.name;
  });
  document.querySelectorAll("[data-hero-h1]").forEach((el) => { el.textContent = brand.h1; });
  document.querySelectorAll("[data-brand-lede]").forEach((el) => { el.textContent = brand.lede; });
  document.querySelectorAll("[data-cta]").forEach((el) => { el.textContent = brand.cta; });
  document.querySelectorAll("[data-tagline]").forEach((el) => { el.textContent = TAGLINE; });
  document.querySelectorAll("[data-legal]").forEach((el) => { el.textContent = LEGAL; });

  const entities = document.querySelector("[data-entities]");
  if (entities) {
    entities.innerHTML = ENTITIES.map((e) => `<span>
      <img src="${esc(e.logo)}" alt="" width="20" height="20" aria-hidden="true" />
      ${esc(e.name)} · ${esc(e.place)}
    </span>`).join("");
  }

  const grid = document.querySelector("[data-products-grid]");
  if (grid) {
    grid.innerHTML = CARDS.map((c) => `<article class="wc-engine-card">
      <div class="wc-engine-tag">${esc(c.tag)}</div>
      <h3 class="wc-engine-title">${esc(c.title)}</h3>
      <div class="wc-engine-line"></div>
      <p class="wc-engine-body">${esc(c.body)}</p>
    </article>`).join("");
  }

  const interest = document.getElementById("interest");
  if (interest) {
    interest.innerHTML = INTERESTS.map((o) => `<option value="${esc(o.value)}">${esc(o.label)}</option>`).join("");
    interest.value = brand.interest;
  }

  window.__WARBLE_BRAND = { key, ...brand, legal: LEGAL, tagline: TAGLINE };

  const local = /^(localhost|127\.0\.0\.1)$/i.test(window.location.hostname);
  if (local) {
    const bar = document.createElement("nav");
    bar.className = "preview-bar";
    bar.setAttribute("aria-label", "Local host preview");
    bar.innerHTML = Object.keys(BRANDS)
      .map((k) => `<a href="/?host=${esc(k)}"${k === key ? ' class="active"' : ""}>${esc(k)}</a>`)
      .join("");
    document.body.prepend(bar);
  }
}

applyBrand();
