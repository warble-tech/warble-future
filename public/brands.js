const TAGLINE = "Enterprise software, built peacefully.";
const FAMILY =
  "Product company. Supervised, labeled loops. Lean-small models and tiny vLLM development — not a services catalog.";

const SHARED_CE = [
  {
    tag: "Apache-2.0",
    title: "ShrikeOps",
    body: "Hunts misconfigurations, CVEs, and deprecated APIs. Scored report before production.",
    href: "https://github.com/warble-tech/shrikeops",
    link: "github.com/warble-tech/shrikeops",
  },
  {
    tag: "Apache-2.0",
    title: "Heron Ops",
    body: "Kubernetes MCP server for live pods, logs, events, and metrics.",
    href: "https://github.com/warble-tech/heron-ops",
    link: "github.com/warble-tech/heron-ops",
  },
  {
    tag: "Community Edition",
    title: "Starling EX Community",
    body: "Starling Lite + Heron Ops + ShrikeOps, one Helm chart. Planned CNCF donation — not a CNCF project until accepted.",
    href: "https://github.com/warble-tech/warble-army",
    link: "github.com/warble-tech/warble-army",
  },
];

const TINY_VLLM = [
  {
    tag: "Supervised",
    title: "Labeled learning",
    body: "Start from labeled data and a definition of good. Supervised loops, not prompt theater.",
    href: "/contact",
    link: "Talk supervised learning",
  },
  {
    tag: "Lean small",
    title: "Tiny vLLM development",
    body: "Prefer small, serveable models. Tiny vLLM in development: honest eval, then promote.",
    href: "/contact",
    link: "Talk tiny vLLM",
  },
  {
    tag: "Agile",
    title: "Short loops",
    body: "Ship a smaller model this sprint. Grow only when the eval bar says so.",
    href: "/contact",
    link: "Talk the loop",
  },
];

const TEXT_FIELDS = {
  "[data-brand-name]": "name",
  "[data-brand-short]": "short",
  "[data-brand-lede]": "lede",
  "[data-brand-brief]": "description",
  "[data-hero-h1]": "heroH1",
  "[data-hero-secondary]": "heroSecondary",
  "[data-announce-title]": "announceTitle",
  "[data-announce-body]": "announceBody",
  "[data-cta]": "cta",
  "[data-products-label]": "productsLabel",
  "[data-products-title]": "productsTitle",
  "[data-products-intro]": "productsIntro",
  "[data-closed-label]": "closedLabel",
  "[data-closed-title]": "closedTitle",
  "[data-closed-intro]": "closedIntro",
  "[data-note]": "note",
  "[data-how-title]": "howTitle",
  "[data-how-intro]": "howIntro",
  "[data-contact-label]": "contactLabel",
  "[data-contact-title]": "contactTitle",
  "[data-contact-lede]": "contactLede",
};

const DEFAULTS = {
  productsLabel: "Open flock",
  productsTitle: "What you can run today",
  products: SHARED_CE,
  closedLabel: "Product line",
  cta: "Talk to the product team",
};

function page(partial) {
  return { ...DEFAULTS, ...partial };
}

const AVIRKA = page({
  name: "Avirka AI",
  short: "Avirka",
  title: "Avirka — supervised learning, lean-small, tiny vLLM development",
  description:
    "Avirka is LLM development with ML: supervised, data-driven, lean-small. Tiny vLLM development — not a giant-model shop.",
  lede: "LLM development with ML. Supervised loops. Lean small. Tiny vLLM in development.",
  heroH1: "Supervised. Lean small. Tiny vLLM.",
  heroSecondary:
    "Avirka is the toolchain: labeled data, eval gates, and tiny vLLM serving. Agile sprints. No one-shot prompt shop.",
  announceTitle: "Tiny models, supervised path",
  announceBody:
    "Prefer the smallest model that clears the bar. Supervised learning on your labels. Tiny vLLM for local and cluster serve while we stay in development.",
  badges: ["Supervised learning", "Lean small", "Tiny vLLM · development", "Agile loops"],
  cta: "Talk tiny vLLM",
  metrics: [
    { value: "Supervised", label: "Labeled data and an explicit eval bar. Not vibe-only fine-tunes." },
    { value: "Lean", label: "Small models first. Grow parameters only when the metric moves." },
    { value: "vLLM", label: "Tiny vLLM development for serveable, honest inference." },
  ],
  carousel: [
    { tag: "Avirka", title: "Supervised learning", body: "Treat the LLM as an ML system: labels, splits, metrics, release bar." },
    { tag: "Lean", title: "Small by default", body: "Agile: ship a tiny model this sprint. Do not start from 70B." },
    { tag: "vLLM", title: "Tiny vLLM development", body: "Serve small checkpoints on vLLM while the toolchain stays in development." },
    { tag: "Data", title: "Data-driven toolchain", body: "Ingest, label, train, evaluate, promote. The path is the product." },
  ],
  productsLabel: "Toolchain",
  productsTitle: "What Avirka is for",
  productsIntro: "Supervised learning. Lean-small. Tiny vLLM development.",
  products: TINY_VLLM,
  closedLabel: "Around Avirka",
  closedTitle: "Family products next to the toolchain",
  closedIntro: "Avirka is the lean toolchain. Other doors stay distinct.",
  closed: [
    { badge: "amber", badgeText: "Closed beta", title: "Reflexion-AI", body: "WarbleCloud AI product. Closed for private beta." },
    { badge: "ink", badgeText: "LF evaluation", title: "Frakma", body: "ML GitOps native production stack, under evaluation with the Linux Foundation." },
    { badge: "violet", badgeText: "Open", title: "Community Edition", body: "ShrikeOps, Heron Ops, Starling EX CE on warbleoss.org." },
  ],
  note: "Avirka stays lean: supervised data, tiny vLLM, short loops. WarbleCloud AI is the product company.",
  howTitle: "Label. Train small. Serve tiny.",
  howIntro: "Supervised learning into lean-small models. Tiny vLLM when you need to serve.",
  steps: [
    { title: "Label", body: "What you have, what you can label, what “good” means." },
    { title: "Train small", body: "Supervised / eval-gated adaptation. Prefer the tiny checkpoint." },
    { title: "Serve tiny vLLM", body: "Development serving path. Promote only when the bar holds." },
  ],
  contactLabel: "Avirka",
  contactTitle: "Tell us about the labels and the size.",
  contactLede: "Supervised learning. Lean-small. Tiny vLLM development.",
  interests: [
    { value: "avirka-tiny-vllm", label: "Tiny vLLM development" },
    { value: "avirka-supervised", label: "Supervised / labeled learning" },
    { value: "avirka-lean-small", label: "Lean-small model path" },
    { value: "avirka-selfhost", label: "Self-hosted tiny serve" },
    { value: "warble-labs", label: "Need Labs on data/domain first" },
    { value: "other", label: "Something else" },
  ],
  defaultInterest: "avirka-tiny-vllm",
  messagePlaceholder: "Labels you have, target size, serve constraint…",
});

const BRANDS = {
  "warblecloud.com": page({
    name: "WarbleCloud",
    short: "WarbleCloud",
    title: "WarbleCloud — AI-native product builder. Lean-small.",
    description:
      "WarbleCloud is an AI-native product company. Supervised, lean-small products. Tiny vLLM in development. Not a services catalog.",
    lede: "AI-native product builder. Lean-small by construction. Agile release in September.",
    heroH1: "Product company. Lean small.",
    heroSecondary:
      "We ship products, not a services menu. Supervised loops, tiny models, LF and AAIF Silver membership — not a hosted-project claim.",
    announceTitle: "September pipeline. Small first.",
    announceBody:
      "Agile: fewer launches, clearer interfaces, smaller models. Community Edition stays public. Commercial seats stay private beta.",
    badges: ["Product startup", "Lean small", "Tiny vLLM · dev", "LF · Silver", "September"],
    metrics: [
      { value: "Product", label: "We build and own the software. Consulting is not the model." },
      { value: "Lean", label: "Supervised, small models. Tiny vLLM in development." },
      { value: "September", label: "First public release pipeline. CE is available now." },
    ],
    carousel: [
      { tag: "Company", title: "AI-native product builder", body: "Product startup. Design, ship, operate — not a bench of hours." },
      { tag: "Avirka", title: "Tiny vLLM development", body: "Supervised learning. Lean-small checkpoints. Tiny vLLM to serve them." },
      { tag: "WarbleCloud AI", title: "Reflexion-AI", body: "Closed for private beta. Product surface, not a services SOW." },
      { tag: "Frakma", title: "ML GitOps production stack", body: "Under native evaluation with the Linux Foundation." },
      { tag: "Warble Labs", title: "Data and domain partner", body: "Intelligent partner for data-driven and domain-driven needs." },
    ],
    productsIntro: "CE stays runnable. Commercial work stays lean-small and in beta or evaluation.",
    closedTitle: "Commercial products — private beta or evaluation",
    closedIntro: "Products, not packaged services. Prefer small.",
    closed: [
      { badge: "violet", badgeText: "Toolchain", title: "Avirka", body: "Supervised learning. Lean-small. Tiny vLLM development." },
      { badge: "amber", badgeText: "Private beta", title: "Reflexion-AI", body: "Closed on WarbleCloud AI." },
      { badge: "ink", badgeText: "LF evaluation", title: "Frakma", body: "ML GitOps native production stack. Membership, not an LF-hosted project claim." },
      { badge: "ink", badgeText: "Partner", title: "Warble Labs", body: "Data and domain-driven needs alongside the product line." },
    ],
    note: "LF and AAIF Silver Partnerships are membership. Community Edition stays at warbleoss.org.",
    howTitle: "Run CE. Train small. Join September.",
    howIntro: "Open source now. Lean-small commercial products after eval.",
    steps: [
      { title: "Run Community Edition", body: "ShrikeOps, Heron Ops, Starling EX CE." },
      { title: "Choose the lean path", body: "Avirka tiny vLLM, Reflexion-AI beta, Frakma evaluation, or Labs." },
      { title: "Join September", body: "First public pipeline. Name the product." },
    ],
    contactLabel: "Product inquiry",
    contactTitle: "Tell us which product — and how small.",
    contactLede: "Product company. Supervised, lean-small. Community Edition does not wait on this form.",
    interests: [
      { value: "avirka-tiny-vllm", label: "Avirka — tiny vLLM / supervised" },
      { value: "reflexion-ai-beta", label: "Reflexion-AI — private beta" },
      { value: "frakma-ml-gitops", label: "Frakma — ML GitOps stack" },
      { value: "warble-labs", label: "Warble Labs — data & domain" },
      { value: "september-pipeline", label: "September release pipeline" },
      { value: "community-edition", label: "Community Edition (self-host)" },
      { value: "other", label: "Something else" },
    ],
    defaultInterest: "avirka-tiny-vllm",
    messagePlaceholder: "Product, labels, size target, timeline…",
  }),

  "warblecloud.ai": page({
    name: "WarbleCloud AI",
    short: "WarbleCloud AI",
    title: "WarbleCloud AI — Reflexion-AI private beta. Lean-small products.",
    description:
      "WarbleCloud AI is an AI-native product builder. Reflexion-AI is closed for private beta. Lean-small, not a services firm.",
    lede: "AI-native product builder. Reflexion-AI has closed for private beta.",
    heroH1: "Reflexion-AI is closed for private beta.",
    heroSecondary:
      "Product company. Supervised, lean-small. Reflexion-AI is invite-only while September and tiny-model work continue.",
    announceTitle: "Private beta is closed",
    announceBody:
      "Not an open waitlist. Request a seat only if you will run the product — not a staff-aug engagement.",
    badges: ["Reflexion-AI · closed", "Lean small", "Product startup"],
    cta: "Request a Reflexion-AI seat",
    metrics: [
      { value: "Closed", label: "Reflexion-AI private beta is not an open waitlist." },
      { value: "Product", label: "AI-native builder. More than a service angle." },
      { value: "Lean", label: "Same family as Avirka tiny vLLM — small first." },
    ],
    carousel: [
      { tag: "Reflexion-AI", title: "Closed for private beta", body: "We reply only when there is a seat that matches the product." },
      { tag: "Company", title: "AI-native product builder", body: "Models, agents, labeled loops — not a catalog of hours." },
      { tag: "Lean", title: "Small by construction", body: "Agile. Supervised. Tiny where it serves." },
      { tag: "Pipeline", title: "September", body: "First public cut. CE does not wait." },
    ],
    productsLabel: "Still open",
    productsTitle: "Community Edition while Reflexion-AI is closed",
    productsIntro: "Reflexion-AI is closed. The public flock is unchanged.",
    closedLabel: "WarbleCloud AI",
    closedTitle: "Reflexion-AI — private beta closed",
    closedIntro: "Product, not a services statement of work.",
    closed: [
      { badge: "amber", badgeText: "Closed", title: "Reflexion-AI", body: "Closed for private beta." },
      { badge: "violet", badgeText: "Lean", title: "Avirka tiny vLLM", body: "Supervised, lean-small toolchain in development." },
    ],
    note: "LF / AAIF Silver is membership. Reflexion-AI is a WarbleCloud AI product.",
    howTitle: "How Reflexion-AI works from here",
    howIntro: "Closed beta. Lean product process. CE remains open.",
    steps: [
      { title: "Use Community Edition", body: "ShrikeOps, Heron Ops, Starling EX CE stay public." },
      { title: "Request a seat", body: "Private beta is closed. Product fit only." },
      { title: "Watch September", body: "First public pipeline after closed evaluation." },
    ],
    contactLabel: "Reflexion-AI",
    contactTitle: "Request a closed private-beta seat.",
    contactLede: "This form is a seat request, not a services intake.",
    interests: [
      { value: "reflexion-ai-beta", label: "Reflexion-AI — private beta seat" },
      { value: "avirka-tiny-vllm", label: "Avirka tiny vLLM instead" },
      { value: "september-pipeline", label: "September pipeline notes" },
      { value: "community-edition", label: "Community Edition" },
      { value: "other", label: "Something else" },
    ],
    defaultInterest: "reflexion-ai-beta",
    messagePlaceholder: "Product job, data boundary, why a closed beta fits…",
  }),

  "warblelabs.io": page({
    name: "Warble Labs",
    short: "Warble Labs",
    title: "Warble Labs — data and domain partner. Supervised, lean-small.",
    description:
      "Intelligent solution partner for data and domain-driven needs. Labels and domain language for lean-small products.",
    lede: "Your intelligent solution partner for data and domain-driven needs.",
    heroH1: "Data. Domain. Then a tiny model.",
    heroSecondary:
      "Labs sits next to the product company: labeled data and domain language so Avirka and tiny vLLM have something honest to learn.",
    announceTitle: "Intelligent solution partner",
    announceBody:
      "Pipelines, labels, domain language. We partner where the data is the hard part — then hand off to a lean product.",
    badges: ["Data-driven", "Domain-driven", "Supervised labels"],
    cta: "Start a Labs conversation",
    metrics: [
      { value: "Data", label: "Labels and evaluation loops products can trust." },
      { value: "Domain", label: "Language and constraints of the business." },
      { value: "Lean", label: "Hand off to tiny models, not a 70B demo." },
    ],
    carousel: [
      { tag: "Partner", title: "Intelligent solution partner", body: "When the blocker is domain and data, not another agent slide." },
      { tag: "Supervised", title: "Labels first", body: "Supervised learning needs names, not vibes." },
      { tag: "Domain", title: "Domain-driven needs", body: "Bounded contexts tiny vLLM can actually respect." },
      { tag: "Family", title: "Then a product", body: "Labs is the partner door. Avirka is the lean toolchain." },
    ],
    productsLabel: "How Labs shows up",
    productsTitle: "Data and domain, then lean product",
    productsIntro: "Labs work should land in Avirka, Reflexion-AI, Frakma, or CE.",
    products: [
      { tag: "Data", title: "Supervised labels", body: "Datasets and eval that make a tiny model honest.", href: "/contact", link: "Talk about data" },
      { tag: "Domain", title: "Domain models", body: "Industry language encoded so software can respect it.", href: "/contact", link: "Talk about domain" },
      { tag: "Open", title: "Community Edition", body: "Run the flock yourself.", href: "https://warbleoss.org", link: "warbleoss.org" },
    ],
    closedLabel: "Hand-off",
    closedTitle: "Where Labs lands",
    closedIntro: "Partner work should end in a product you operate.",
    closed: [
      { badge: "violet", badgeText: "Lean", title: "Avirka tiny vLLM", body: "Supervised, lean-small toolchain." },
      { badge: "amber", badgeText: "Private beta", title: "Reflexion-AI", body: "Closed on WarbleCloud AI." },
      { badge: "ink", badgeText: "LF evaluation", title: "Frakma", body: "ML GitOps stack, under LF evaluation." },
    ],
    note: "Labs is the partner surface. WarbleCloud AI is the product company.",
    howTitle: "Name the domain. Label. Land small.",
    howIntro: "Data and domain first. Then a lean product.",
    steps: [
      { title: "Name the domain", body: "What must be true in your industry and policy." },
      { title: "Label the loop", body: "What you collect, how you evaluate." },
      { title: "Land lean", body: "Avirka tiny vLLM, Reflexion-AI, Frakma, or CE." },
    ],
    contactLabel: "Labs",
    contactTitle: "Describe the data or the domain.",
    contactLede: "Intelligent solution partner for data-driven and domain-driven needs.",
    interests: [
      { value: "warble-labs-data", label: "Data-driven / labels" },
      { value: "warble-labs-domain", label: "Domain-driven needs" },
      { value: "avirka-tiny-vllm", label: "Hand off to tiny vLLM" },
      { value: "reflexion-ai-beta", label: "Hand off to Reflexion-AI" },
      { value: "frakma-ml-gitops", label: "Hand off to Frakma" },
      { value: "other", label: "Something else" },
    ],
    defaultInterest: "warble-labs-data",
    messagePlaceholder: "Domain, labels you have, what “done” looks like…",
  }),

  "frakma.io": page({
    name: "Frakma",
    short: "Frakma",
    title: "Frakma — ML GitOps native production stack, under LF evaluation",
    description:
      "Frakma is under native evaluation with the Linux Foundation for an ML GitOps native production stack. Membership, not a hosted-project claim.",
    lede: "Under native evaluation with the Linux Foundation for an ML GitOps native production stack.",
    heroH1: "ML GitOps. Native production stack.",
    heroSecondary:
      "Native evaluation with the Linux Foundation. Silver Partner is membership. We do not claim Frakma is an LF-hosted project.",
    announceTitle: "Linux Foundation — native evaluation",
    announceBody:
      "Models, data, and cluster state as Git-reviewed change. Lean artifacts. Evaluation underway. Not a donation announcement.",
    badges: ["LF · native evaluation", "ML GitOps", "Not an LF project claim"],
    cta: "Follow the Frakma evaluation",
    metrics: [
      { value: "ML GitOps", label: "Production changes as reviewed Git history." },
      { value: "Evaluation", label: "With the Linux Foundation. Not a hosted-project claim." },
      { value: "Lean", label: "Promote small, serveable artifacts — including tiny vLLM." },
    ],
    carousel: [
      { tag: "Frakma", title: "ML GitOps native production stack", body: "Model, data, runtime — reviewed, revertible, owned." },
      { tag: "Linux Foundation", title: "Under native evaluation", body: "Silver Partner ≠ hosted project." },
      { tag: "Lean", title: "Small artifacts", body: "GitOps loves a tiny checkpoint more than a mystery 70B." },
      { tag: "Boundary", title: "Separate from CE", body: "Starling EX Community stays the self-host flock." },
    ],
    productsIntro: "Operate the flock today. Frakma remains in evaluation.",
    closedLabel: "Frakma",
    closedTitle: "Production stack — evaluation, not GA",
    closedIntro: "Native evaluation with the Linux Foundation.",
    closed: [
      { badge: "ink", badgeText: "Evaluation", title: "ML GitOps stack", body: "Git-reviewed promotion of models and pipelines." },
      { badge: "violet", badgeText: "Membership", title: "LF / AAIF Silver", body: "Do not read this as “Frakma is an LF project.”" },
      { badge: "amber", badgeText: "Not GA", title: "No open install yet", body: "Run Community Edition this week." },
    ],
    note: "Planned CNCF donation language applies to Starling EX Community, not Frakma, and only if accepted.",
    howTitle: "GitOps for ML production",
    howIntro: "Same discipline as app GitOps. Different artifacts. Prefer small.",
    steps: [
      { title: "Declare the change", body: "Model, data snapshot, runtime intent in Git." },
      { title: "Review like production", body: "Policy and owners on the path to the cluster." },
      { title: "Evaluate with LF", body: "Native evaluation. We will not over-claim the outcome." },
    ],
    contactLabel: "Frakma",
    contactTitle: "Follow the ML GitOps evaluation.",
    contactLede: "Under native evaluation with the Linux Foundation.",
    interests: [
      { value: "frakma-ml-gitops", label: "ML GitOps production stack" },
      { value: "frakma-lf-eval", label: "LF evaluation — updates only" },
      { value: "avirka-tiny-vllm", label: "Tiny vLLM artifacts" },
      { value: "community-edition", label: "Community Edition instead" },
      { value: "other", label: "Something else" },
    ],
    defaultInterest: "frakma-ml-gitops",
    messagePlaceholder: "GitOps path (Argo / Flux), ML runtime, size of artifacts…",
  }),

  "avirka.ai": AVIRKA,
  "avrika.ai": page({
    ...AVIRKA,
    name: "Avrika AI",
    short: "Avrika",
    title: "Avrika — original mark. Same tiny vLLM toolchain.",
    description: "Original research-facing mark for Avirka: supervised, lean-small, tiny vLLM development.",
    heroH1: "Same lean toolchain. Original name.",
    heroSecondary:
      "Avrika is the original mark. The product is Avirka: supervised learning, lean-small, tiny vLLM.",
    announceTitle: "Use Avirka for the product name",
    announceBody: "This domain keeps the original brand. Same toolchain and September rules as avirka.ai.",
    badges: ["Original mark", "Supervised", "Tiny vLLM"],
    note: "Prefer avirka.ai for the product name. This domain remains valid.",
  }),
};

const HOST_ALIASES = {
  "warble-future-production.up.railway.app": "warblecloud.com",
};

function brandKeyFromHost(host) {
  const h = (host || "").toLowerCase().replace(/^www\./, "").split(":")[0];
  if (BRANDS[h]) return h;
  if (HOST_ALIASES[h]) return HOST_ALIASES[h];
  const hit = Object.keys(BRANDS).find((k) => h.endsWith(`.${k}`));
  return hit || "warblecloud.com";
}

function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, (ch) => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]
  ));
}

function setText(sel, value) {
  document.querySelectorAll(sel).forEach((el) => {
    el.textContent = value;
  });
}

function renderCards(rootSel, items, kind) {
  const root = document.querySelector(rootSel);
  if (!root) return;
  root.innerHTML = items
    .map((item) => {
      if (kind === "closed") {
        return `<article class="wc-engine-card">
          <span class="wc-badge wc-badge-${esc(item.badge)}">${esc(item.badgeText)}</span>
          <h3 class="wc-engine-title">${esc(item.title)}</h3>
          <div class="wc-engine-line"></div>
          <p class="wc-engine-body">${esc(item.body)}</p>
        </article>`;
      }
      const internal = item.href?.startsWith("/");
      const link = item.href
        ? `<a class="wc-engine-stat" href="${esc(item.href)}" ${internal ? "data-link" : 'rel="noopener"'}>${esc(item.link)}</a>`
        : "";
      return `<article class="wc-engine-card">
        <div class="wc-engine-tag">${esc(item.tag)}</div>
        <h3 class="wc-engine-title">${esc(item.title)}</h3>
        <div class="wc-engine-line"></div>
        <p class="wc-engine-body">${esc(item.body)}</p>
        ${link}
      </article>`;
    })
    .join("");
}

function applyBrand() {
  const key = brandKeyFromHost(window.location.hostname);
  const brand = BRANDS[key];
  document.documentElement.dataset.brand = key;
  document.title = brand.title;

  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", `${brand.description} ${FAMILY}`);
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", brand.title);
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute("content", brand.description);

  for (const [sel, field] of Object.entries(TEXT_FIELDS)) setText(sel, brand[field]);
  setText("[data-family-brief]", FAMILY);
  setText("[data-tagline]", TAGLINE);

  const badges = document.querySelector("[data-badges]");
  if (badges) {
    badges.innerHTML = brand.badges
      .map((b, i) => `<span class="wc-badge ${i === 0 ? "wc-badge-violet" : "wc-badge-ink"}">${esc(b)}</span>`)
      .join("");
  }

  const metrics = document.querySelector("[data-metrics]");
  if (metrics) {
    metrics.innerHTML = brand.metrics
      .map(
        (m) => `<div class="wc-metric-card">
          <div class="wc-metric-value">${esc(m.value)}</div>
          <div class="wc-metric-label">${esc(m.label)}</div>
        </div>`,
      )
      .join("");
  }

  const track = document.querySelector("[data-carousel-track]");
  if (track) {
    track.innerHTML = brand.carousel
      .map(
        (slide) => `<article class="wc-carousel-slide">
          <p class="wc-eyebrow"><span class="dot" aria-hidden="true"></span>${esc(slide.tag)}</p>
          <h3>${esc(slide.title)}</h3>
          <p>${esc(slide.body)}</p>
        </article>`,
      )
      .join("");
  }

  renderCards("[data-products-grid]", brand.products, "open");
  renderCards("[data-closed-grid]", brand.closed, "closed");

  const steps = document.querySelector("[data-steps]");
  if (steps) {
    steps.innerHTML = brand.steps
      .map(
        (s, i) => `<div class="step">
          <div class="num">${i + 1}</div>
          <div><h3>${esc(s.title)}</h3><p>${esc(s.body)}</p></div>
        </div>`,
      )
      .join("");
  }

  const interest = document.getElementById("interest");
  if (interest) {
    interest.innerHTML = brand.interests
      .map((opt) => `<option value="${esc(opt.value)}">${esc(opt.label)}</option>`)
      .join("");
    interest.value = brand.defaultInterest;
  }

  const message = document.getElementById("message");
  if (message) message.placeholder = brand.messagePlaceholder;

  window.__WARBLE_BRAND = { key, ...brand, family: FAMILY, tagline: TAGLINE };
}

applyBrand();
