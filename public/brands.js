const TAGLINE = "Enterprise software, built peacefully.";
const LEGAL = "WarbleCloud LLC (US) · ChirpStack LLP (India)";
const INTERESTS = [
  { value: "avirka-tiny-vllm", label: "Avirka — tiny vLLM / supervised" },
  { value: "reflexion-ai-beta", label: "Reflexion-AI — private beta" },
  { value: "frakma-ml-gitops", label: "Frakma — ML GitOps" },
  { value: "warble-labs", label: "Warble Labs — data & domain" },
  { value: "community-edition", label: "Community Edition" },
  { value: "other", label: "Other" },
];

const CARDS = [
  { tag: "Open", title: "ShrikeOps · Heron Ops · Starling EX CE", body: "Self-host now. warbleoss.org" },
  { tag: "Lean", title: "Avirka", body: "Supervised. Lean-small. Tiny vLLM in development." },
  { tag: "Closed", title: "Reflexion-AI", body: "Private beta closed. Product, not services." },
  { tag: "Eval", title: "Frakma", body: "ML GitOps stack. LF evaluation. Not an LF-hosted project." },
];

const BRANDS = {
  "warblecloud.com": {
    name: "WarbleCloud",
    h1: "Product company. Lean small.",
    lede: "WarbleCloud LLC (US). AI-native products. Supervised loops. Tiny vLLM. Not a services shop.",
    cta: "Contact",
    interest: "avirka-tiny-vllm",
  },
  "warblecloud.ai": {
    name: "WarbleCloud AI",
    h1: "Reflexion-AI is closed.",
    lede: "Private beta. Product seat only. WarbleCloud LLC (US).",
    cta: "Request a seat",
    interest: "reflexion-ai-beta",
  },
  "warblelabs.io": {
    name: "Warble Labs",
    h1: "Data and domain. Then a tiny model.",
    lede: "Partner door for labels and domain language. ChirpStack LLP (India) operates with WarbleCloud LLC (US).",
    cta: "Talk Labs",
    interest: "warble-labs",
  },
  "frakma.io": {
    name: "Frakma",
    h1: "ML GitOps. Under LF evaluation.",
    lede: "Native evaluation with the Linux Foundation. Membership, not a hosted-project claim.",
    cta: "Follow Frakma",
    interest: "frakma-ml-gitops",
  },
  "avirka.ai": {
    name: "Avirka",
    h1: "Supervised. Lean small. Tiny vLLM.",
    lede: "LLM development with ML. Labeled data. Small checkpoints. vLLM in development.",
    cta: "Talk tiny vLLM",
    interest: "avirka-tiny-vllm",
  },
  "avrika.ai": {
    name: "Avrika",
    h1: "Same toolchain. Original name.",
    lede: "Use avirka.ai for the product. Supervised, lean-small, tiny vLLM.",
    cta: "Talk tiny vLLM",
    interest: "avirka-tiny-vllm",
  },
};

function brandKeyFromHost(host) {
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
  document.querySelectorAll("[data-brand-name], [data-brand-short]").forEach((el) => {
    el.textContent = brand.name;
  });
  document.querySelectorAll("[data-hero-h1]").forEach((el) => { el.textContent = brand.h1; });
  document.querySelectorAll("[data-brand-lede]").forEach((el) => { el.textContent = brand.lede; });
  document.querySelectorAll("[data-cta]").forEach((el) => { el.textContent = brand.cta; });
  document.querySelectorAll("[data-tagline]").forEach((el) => { el.textContent = TAGLINE; });
  document.querySelectorAll("[data-legal]").forEach((el) => { el.textContent = LEGAL; });

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
}

applyBrand();
