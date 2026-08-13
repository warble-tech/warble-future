const TAGLINE = "Enterprise software, built peacefully.";
const FAMILY =
  "We are a product company: AI-native products, a data-driven ML toolchain, and an ML GitOps production stack. Not a services shop first.";

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
    body: "Kubernetes MCP server for live pods, logs, events, and metrics. Calm observation for any agent IDE.",
    href: "https://github.com/warble-tech/heron-ops",
    link: "github.com/warble-tech/heron-ops",
  },
  {
    tag: "Community Edition",
    title: "Starling EX Community",
    body: "Self-host package: Starling Lite + Heron Ops + ShrikeOps, one Helm chart. Planned CNCF donation — not a CNCF project until accepted.",
    href: "https://github.com/warble-tech/warble-army",
    link: "github.com/warble-tech/warble-army",
  },
];

const BRANDS = {
  "warblecloud.com": {
    name: "WarbleCloud",
    short: "WarbleCloud",
    title: "WarbleCloud — AI-native product builder",
    description:
      "WarbleCloud is an AI-native product company. We build products, not a services catalog. First release pipeline: September.",
    lede: "AI-native product builder. We ship products — platforms, toolchains, and production stacks — not a services menu.",
    heroH1: "Product company. AI-native by construction.",
    heroSecondary:
      "WarbleCloud builds products. The service angle is secondary. We widen with the Linux Foundation and the Agentic AI Foundation as Silver Partners — membership, not a claim that we host a foundation project.",
    announceTitle: "September is the release pipeline",
    announceBody:
      "Fewer launches, clearer interfaces. Community Edition stays public. Commercial seats stay private beta until the pipeline opens.",
    badges: ["Product startup", "LF · Silver Partner", "AAIF · Silver Partner", "September pipeline"],
    cta: "Talk to the product team",
    metrics: [
      { value: "Product", label: "We build and own the software. Consulting is not the model." },
      { value: "AI-native", label: "Products designed around models, agents, and data loops." },
      { value: "September", label: "First public release pipeline. CE is available now." },
    ],
    carousel: [
      { tag: "Company", title: "AI-native product builder", body: "WarbleCloud is a product startup. We design, ship, and operate software — not a bench of billable hours." },
      { tag: "WarbleCloud AI", title: "Reflexion-AI", body: "Reflexion-AI is closed for private beta. Request a seat if you are evaluating an AI-native product surface." },
      { tag: "Avirka", title: "LLM development toolchain", body: "LLM development with ML. A data-driven toolchain for training, evaluation, and iteration." },
      { tag: "Frakma", title: "ML GitOps production stack", body: "Under native evaluation with the Linux Foundation for an ML GitOps native production stack." },
      { tag: "Warble Labs", title: "Data and domain partner", body: "Intelligent solution partner for data-driven and domain-driven needs — next to the product line, not instead of it." },
    ],
    productsLabel: "Open flock",
    productsTitle: "What you can run today",
    productsIntro: "While commercial products sit in beta or evaluation, the public flock on warbleoss.org is unchanged.",
    products: SHARED_CE,
    closedLabel: "Product line",
    closedTitle: "Commercial products — private beta or evaluation",
    closedIntro: "We are a product company. These are products, not packaged services.",
    closed: [
      { badge: "amber", badgeText: "Private beta", title: "Reflexion-AI", body: "On WarbleCloud AI. Closed for private beta. AI-native product surface — not a services engagement." },
      { badge: "ink", badgeText: "LF evaluation", title: "Frakma", body: "Under native evaluation with the Linux Foundation for an ML GitOps native production stack. Membership, not an LF-hosted project claim." },
      { badge: "violet", badgeText: "Toolchain", title: "Avirka", body: "LLM development with ML. Data-driven toolchain for teams that train, evaluate, and ship models." },
      { badge: "ink", badgeText: "Partner", title: "Warble Labs", body: "Intelligent solution partner for data and domain-driven needs alongside the product line." },
    ],
    note: "Linux Foundation and AAIF Silver Partnerships are membership. Community Edition stays at warbleoss.org.",
    howTitle: "Build the product. Keep CE open.",
    howIntro: "Open source you can run now. Commercial products stay methodical: beta, evaluation, then September.",
    steps: [
      { title: "Run Community Edition", body: "ShrikeOps, Heron Ops, Starling EX CE. Self-hosted, Apache-licensed where stated." },
      { title: "Choose the product", body: "Reflexion-AI (private beta), Avirka toolchain, Frakma ML GitOps stack, or Labs for domain work." },
      { title: "Join the pipeline", body: "September is the first public release pipeline. Tell us which product you are actually evaluating." },
    ],
    contactLabel: "Product inquiry",
    contactTitle: "Tell us which product you need.",
    contactLede: "Product company, not a services intake. Name the product. Community Edition does not wait on this form.",
    interests: [
      { value: "reflexion-ai-beta", label: "Reflexion-AI — private beta" },
      { value: "avirka-toolchain", label: "Avirka — LLM / ML toolchain" },
      { value: "frakma-ml-gitops", label: "Frakma — ML GitOps stack" },
      { value: "warble-labs", label: "Warble Labs — data & domain" },
      { value: "september-pipeline", label: "September release pipeline" },
      { value: "community-edition", label: "Community Edition (self-host)" },
      { value: "other", label: "Something else" },
    ],
    defaultInterest: "september-pipeline",
    messagePlaceholder: "Product, stack, constraint, timeline…",
  },

  "warblecloud.ai": {
    name: "WarbleCloud AI",
    short: "WarbleCloud AI",
    title: "WarbleCloud AI — AI-native product builder. Reflexion-AI private beta.",
    description:
      "WarbleCloud AI is an AI-native product builder. Reflexion-AI is closed for private beta. We are a product startup, not a services firm.",
    lede: "AI-native product builder. Reflexion-AI has closed for private beta.",
    heroH1: "Reflexion-AI is closed for private beta.",
    heroSecondary:
      "WarbleCloud AI builds AI-native products. The service angle is not the story. Reflexion-AI is invite-only while we finish the September pipeline.",
    announceTitle: "Private beta is closed",
    announceBody:
      "Reflexion-AI is not taking open sign-ups. Request a seat if you are evaluating an AI-native product — not a staff-augmentation engagement.",
    badges: ["Reflexion-AI · private beta closed", "Product startup", "September pipeline"],
    cta: "Request a Reflexion-AI seat",
    metrics: [
      { value: "Closed", label: "Reflexion-AI private beta is not an open waitlist." },
      { value: "Product", label: "AI-native product builder. More than a service angle." },
      { value: "September", label: "First public pipeline for the next product cut." },
    ],
    carousel: [
      { tag: "Reflexion-AI", title: "Closed for private beta", body: "The product is in a closed private beta. We reply only when there is a seat that matches your use." },
      { tag: "Company", title: "AI-native product builder", body: "We build products that think in models, agents, and feedback loops — not a catalog of professional services." },
      { tag: "Builder", title: "More than a service angle", body: "If you need a vendor bench, this is the wrong door. If you need a product you will run, stay." },
      { tag: "Pipeline", title: "September release", body: "Methodical ship date. Community Edition on warbleoss.org does not wait on Reflexion-AI." },
    ],
    productsLabel: "Still open",
    productsTitle: "Community Edition while Reflexion-AI is closed",
    productsIntro: "Reflexion-AI is closed for private beta. The public flock is unchanged.",
    products: SHARED_CE,
    closedLabel: "WarbleCloud AI",
    closedTitle: "Reflexion-AI — private beta closed",
    closedIntro: "Product, not a services statement of work.",
    closed: [
      { badge: "amber", badgeText: "Closed", title: "Reflexion-AI", body: "Closed for private beta. AI-native product surface for teams that will operate the product themselves." },
      { badge: "violet", badgeText: "Request", title: "Seat request", body: "Describe the product job, data boundary, and whether you can run a closed beta. We reply if there is a seat." },
    ],
    note: "Silver Partner of LF and AAIF — membership only. Reflexion-AI is a WarbleCloud AI product, not a foundation project.",
    howTitle: "How Reflexion-AI works from here",
    howIntro: "Closed beta. Product company process. CE remains the open path.",
    steps: [
      { title: "Use Community Edition", body: "ShrikeOps, Heron Ops, Starling EX CE stay public." },
      { title: "Request a Reflexion-AI seat", body: "Private beta is closed. We admit only fits for the product, not services work." },
      { title: "Watch September", body: "First public pipeline after the closed evaluation." },
    ],
    contactLabel: "Reflexion-AI",
    contactTitle: "Request a closed private-beta seat.",
    contactLede: "Reflexion-AI is closed. This form is a seat request, not a services intake.",
    interests: [
      { value: "reflexion-ai-beta", label: "Reflexion-AI — private beta seat" },
      { value: "september-pipeline", label: "September pipeline notes" },
      { value: "community-edition", label: "Community Edition" },
      { value: "product-partnership", label: "Product partnership" },
      { value: "other", label: "Something else" },
    ],
    defaultInterest: "reflexion-ai-beta",
    messagePlaceholder: "Product job, data boundary, why a closed beta fits…",
  },

  "warblelabs.io": {
    name: "Warble Labs",
    short: "Warble Labs",
    title: "Warble Labs — intelligent partner for data and domain-driven needs",
    description:
      "Warble Labs is your intelligent solution partner for data-driven and domain-driven needs. Adjacent to the Warble product line.",
    lede: "Your intelligent solution partner for data and domain-driven needs.",
    heroH1: "Data-driven. Domain-driven. Partner, not theater.",
    heroSecondary:
      "Warble Labs sits next to the product company: we help you shape data platforms and domain models so the products you run actually fit the work.",
    announceTitle: "Intelligent solution partner",
    announceBody:
      "Data pipelines, domain language, evaluation sets, and the operating model around them. We do not pretend this is a staff-aug firm; we partner where the domain is the hard part.",
    badges: ["Data-driven", "Domain-driven", "Solution partner"],
    cta: "Start a Labs conversation",
    metrics: [
      { value: "Data", label: "Pipelines, quality, and evaluation loops that products can trust." },
      { value: "Domain", label: "Language, constraints, and workflows of the business — not generic demos." },
      { value: "Partner", label: "Intelligent solution partner alongside Warble products." },
    ],
    carousel: [
      { tag: "Partner", title: "Intelligent solution partner", body: "For teams whose blocker is the domain and the data, not another slide about agents." },
      { tag: "Data", title: "Data-driven needs", body: "Collection, labeling, evaluation, and the feedback path back into models and products." },
      { tag: "Domain", title: "Domain-driven needs", body: "Bounded contexts, policy, and language that Avirka, Reflexion-AI, or Frakma can actually run against." },
      { tag: "Family", title: "Next to the products", body: "Labs is the partner door. WarbleCloud AI remains the product company." },
    ],
    productsLabel: "How Labs shows up",
    productsTitle: "Data and domain, then product",
    productsIntro: "Labs work is meant to land in a product: Avirka, Reflexion-AI, Frakma, or CE.",
    products: [
      { tag: "Data", title: "Data-driven loops", body: "Datasets, evaluation, and telemetry that make an LLM or ML system honest.", href: "/contact", link: "Talk about data" },
      { tag: "Domain", title: "Domain models", body: "The language and constraints of your industry, encoded so software can respect them.", href: "/contact", link: "Talk about domain" },
      { tag: "Open", title: "Community Edition", body: "ShrikeOps, Heron Ops, Starling EX CE if you want to run the flock yourself.", href: "https://warbleoss.org", link: "warbleoss.org" },
    ],
    closedLabel: "With the product line",
    closedTitle: "Where Labs hands off",
    closedIntro: "Partner work should end in a product you operate.",
    closed: [
      { badge: "violet", badgeText: "Toolchain", title: "Avirka", body: "LLM development with ML. Data-driven toolchain." },
      { badge: "amber", badgeText: "Private beta", title: "Reflexion-AI", body: "Closed on WarbleCloud AI. Product, not a Labs statement of work." },
      { badge: "ink", badgeText: "LF evaluation", title: "Frakma", body: "ML GitOps native production stack, under evaluation with the Linux Foundation." },
    ],
    note: "Warble Labs is the partner surface. WarbleCloud AI is the product company.",
    howTitle: "Partner on the hard part. Ship a product.",
    howIntro: "We start from data and domain, then point at the product that should carry the result.",
    steps: [
      { title: "Name the domain", body: "What must be true in your industry, data, and policy." },
      { title: "Shape the data loop", body: "What you collect, how you evaluate, how the product learns." },
      { title: "Land in a product", body: "Avirka toolchain, Reflexion-AI, Frakma stack, or CE." },
    ],
    contactLabel: "Labs",
    contactTitle: "Describe the data or the domain.",
    contactLede: "Intelligent solution partner for data-driven and domain-driven needs.",
    interests: [
      { value: "warble-labs-data", label: "Data-driven needs" },
      { value: "warble-labs-domain", label: "Domain-driven needs" },
      { value: "avirka-toolchain", label: "Hand off to Avirka toolchain" },
      { value: "reflexion-ai-beta", label: "Hand off to Reflexion-AI" },
      { value: "frakma-ml-gitops", label: "Hand off to Frakma" },
      { value: "other", label: "Something else" },
    ],
    defaultInterest: "warble-labs-data",
    messagePlaceholder: "Domain, data you have, constraint, what “done” looks like…",
  },

  "frakma.io": {
    name: "Frakma",
    short: "Frakma",
    title: "Frakma — ML GitOps native production stack, under LF evaluation",
    description:
      "Frakma is under native evaluation with the Linux Foundation for an ML GitOps native production stack. Silver Partnership is membership, not a hosted-project claim.",
    lede: "Under native evaluation with the Linux Foundation for an ML GitOps native production stack.",
    heroH1: "ML GitOps. Native production stack.",
    heroSecondary:
      "Frakma is in native evaluation with the Linux Foundation for that stack. We are Silver Partners — that is membership. We do not claim Frakma is an LF-hosted project.",
    announceTitle: "Linux Foundation — native evaluation",
    announceBody:
      "The work on the table is an ML GitOps native production stack: models, data, and cluster state as Git-reviewed change. Evaluation is underway. Not a donation announcement.",
    badges: ["LF · native evaluation", "ML GitOps", "Production stack", "Not an LF project claim"],
    cta: "Follow the Frakma evaluation",
    metrics: [
      { value: "ML GitOps", label: "Production changes to models and pipelines as reviewed Git history." },
      { value: "Evaluation", label: "Native evaluation with the Linux Foundation. Not a hosted-project claim." },
      { value: "Stack", label: "Meant to run in production, next to Community Edition ops tools." },
    ],
    carousel: [
      { tag: "Frakma", title: "ML GitOps native production stack", body: "Treat model, data, and runtime change the way you treat application GitOps — reviewed, revertible, owned." },
      { tag: "Linux Foundation", title: "Under native evaluation", body: "We are evaluating the stack in the open-source and foundation context. Silver Partner ≠ hosted project." },
      { tag: "Production", title: "Built to run", body: "Not a demo notebook. A production stack for teams that already ship with GitOps discipline." },
      { tag: "Boundary", title: "Separate from CE", body: "Starling EX Community stays the self-host flock. Frakma is the commercial / foundation-track stack." },
    ],
    productsLabel: "Around the stack",
    productsTitle: "What is open while Frakma is in evaluation",
    productsIntro: "Operate the flock today. Frakma remains in evaluation.",
    products: SHARED_CE,
    closedLabel: "Frakma",
    closedTitle: "Production stack — evaluation, not general availability",
    closedIntro: "Native evaluation with the Linux Foundation for an ML GitOps native production stack.",
    closed: [
      { badge: "ink", badgeText: "Evaluation", title: "ML GitOps stack", body: "Git-reviewed promotion of models and pipelines into production." },
      { badge: "violet", badgeText: "Membership", title: "LF / AAIF Silver", body: "Partnership is membership. Do not read this as “Frakma is an LF project.”" },
      { badge: "amber", badgeText: "Not GA", title: "No open install yet", body: "If you need something to run this week, use Community Edition." },
    ],
    note: "Planned CNCF donation language applies to Starling EX Community, not to Frakma, and only if accepted.",
    howTitle: "GitOps for ML production",
    howIntro: "Same discipline as app GitOps. Different artifacts.",
    steps: [
      { title: "Declare the change", body: "Model, data snapshot, and runtime intent in Git." },
      { title: "Review like production", body: "Policy and owners on the path to the cluster." },
      { title: "Evaluate with LF", body: "Native evaluation for this production stack. We will not over-claim the outcome." },
    ],
    contactLabel: "Frakma",
    contactTitle: "Follow the ML GitOps evaluation.",
    contactLede: "Under native evaluation with the Linux Foundation. Tell us if you run GitOps in production today.",
    interests: [
      { value: "frakma-ml-gitops", label: "ML GitOps production stack" },
      { value: "frakma-lf-eval", label: "LF evaluation — updates only" },
      { value: "community-edition", label: "Community Edition instead" },
      { value: "september-pipeline", label: "September pipeline" },
      { value: "other", label: "Something else" },
    ],
    defaultInterest: "frakma-ml-gitops",
    messagePlaceholder: "Current GitOps path (Argo / Flux / other), ML runtime, constraint…",
  },

  "avirka.ai": {
    name: "Avirka AI",
    short: "Avirka",
    title: "Avirka — LLM development with ML. Data-driven toolchain.",
    description:
      "Avirka is LLM development with ML: a data-driven toolchain for teams that train, evaluate, and iterate models.",
    lede: "LLM development with ML. A data-driven toolchain.",
    heroH1: "LLM development with ML. Data-driven toolchain.",
    heroSecondary:
      "Avirka is the toolchain product: develop LLMs with classical ML discipline — data, evaluation, and iteration — not a one-shot prompt shop.",
    announceTitle: "Toolchain, not a chatbot SKU",
    announceBody:
      "Bring data, training, eval, and release into one path. Self-hostable model story stays. Commercial seats follow the September pipeline.",
    badges: ["LLM development", "ML discipline", "Data-driven toolchain"],
    cta: "Talk about the toolchain",
    metrics: [
      { value: "LLM", label: "Development path for large language models you will actually operate." },
      { value: "ML", label: "Training, evaluation, and iteration with ML discipline." },
      { value: "Data", label: "Toolchain starts from data, not from a demo prompt." },
    ],
    carousel: [
      { tag: "Avirka", title: "LLM development with ML", body: "Treat language models as ML systems: data, splits, metrics, and a release bar." },
      { tag: "Toolchain", title: "Data-driven toolchain", body: "Ingest, label, train, evaluate, compare, promote. The product is the path, not a single model file." },
      { tag: "Self-host", title: "You can still run the model", body: "Avirka remains the self-hostable model story in the family. Commercial control plane is separate." },
      { tag: "Labs", title: "When the domain is the work", body: "Warble Labs partners on data and domain. Avirka is where that work becomes a toolchain." },
    ],
    productsLabel: "Toolchain",
    productsTitle: "What Avirka is for",
    productsIntro: "LLM development with ML. Data-driven toolchain.",
    products: [
      { tag: "Develop", title: "LLM development", body: "Fine-tune, adapt, and ship language models with an explicit eval gate.", href: "/contact", link: "Discuss LLM development" },
      { tag: "ML", title: "ML methods", body: "Classical ML next to LLMs: features, baselines, and honest comparison.", href: "/contact", link: "Discuss ML path" },
      { tag: "Data", title: "Data-driven loop", body: "The toolchain assumes you have (or will build) data, not just an API key.", href: "/contact", link: "Discuss data loop" },
    ],
    closedLabel: "Around Avirka",
    closedTitle: "Family products that sit next to the toolchain",
    closedIntro: "Avirka is the toolchain. Other doors stay distinct.",
    closed: [
      { badge: "amber", badgeText: "Closed beta", title: "Reflexion-AI", body: "WarbleCloud AI product. Closed for private beta." },
      { badge: "ink", badgeText: "LF evaluation", title: "Frakma", body: "ML GitOps native production stack, under evaluation with the Linux Foundation." },
      { badge: "violet", badgeText: "Open", title: "Community Edition", body: "ShrikeOps, Heron Ops, Starling EX CE on warbleoss.org." },
    ],
    note: "Avirka is the toolchain product. WarbleCloud AI is the product company. Labs is the domain partner.",
    howTitle: "Data in. Model out. Eval in between.",
    howIntro: "LLM development with ML. The toolchain is the product.",
    steps: [
      { title: "Start from data", body: "What you have, what you can label, what “good” means." },
      { title: "Train and evaluate", body: "ML methods and LLM adaptation behind the same gate." },
      { title: "Promote", body: "A model you can run — self-host or into a later production stack." },
    ],
    contactLabel: "Avirka",
    contactTitle: "Tell us about the model and the data.",
    contactLede: "LLM development with ML. Data-driven toolchain.",
    interests: [
      { value: "avirka-toolchain", label: "Data-driven toolchain" },
      { value: "avirka-llm", label: "LLM development" },
      { value: "avirka-ml", label: "ML methods / evaluation" },
      { value: "avirka-selfhost", label: "Self-hosted model" },
      { value: "warble-labs", label: "Need Labs on data/domain first" },
      { value: "other", label: "Something else" },
    ],
    defaultInterest: "avirka-toolchain",
    messagePlaceholder: "Model job, data you have, train vs eval vs host…",
  },

  "avrika.ai": {
    name: "Avrika AI",
    short: "Avrika",
    title: "Avrika — LLM development with ML. Data-driven toolchain.",
    description:
      "Avrika is the original spelling of the Avirka toolchain: LLM development with ML, data-driven.",
    lede: "LLM development with ML. A data-driven toolchain. Same product family as Avirka.",
    heroH1: "Same toolchain. Original name.",
    heroSecondary:
      "Avrika is the original research-facing mark. The product is Avirka: LLM development with ML, data-driven toolchain.",
    announceTitle: "Use Avirka for the product",
    announceBody:
      "This domain keeps the original brand. The toolchain, private-beta rules, and September pipeline are the same as avirka.ai.",
    badges: ["Original mark", "LLM + ML", "Data-driven toolchain"],
    cta: "Talk about the toolchain",
    metrics: [
      { value: "Avrika", label: "Original mark for the research-facing brand." },
      { value: "Avirka", label: "Product name for the LLM / ML toolchain." },
      { value: "Data", label: "Toolchain starts from data." },
    ],
    carousel: [
      { tag: "Avrika", title: "Original mark", body: "Research-facing name. Same company, same toolchain." },
      { tag: "Avirka", title: "LLM development with ML", body: "Data-driven toolchain for teams that will operate the model." },
      { tag: "Family", title: "Product company", body: "WarbleCloud AI builds products. This is one of them." },
    ],
    productsLabel: "Toolchain",
    productsTitle: "What you are looking at",
    productsIntro: "Same product as avirka.ai.",
    products: [
      { tag: "Product", title: "Avirka toolchain", body: "LLM development with ML. Data-driven.", href: "https://avirka.ai", link: "avirka.ai" },
      { tag: "Open", title: "Community Edition", body: "Ops flock, self-hosted.", href: "https://warbleoss.org", link: "warbleoss.org" },
    ],
    closedLabel: "Family",
    closedTitle: "Other products",
    closedIntro: "Distinct doors.",
    closed: [
      { badge: "amber", badgeText: "Closed", title: "Reflexion-AI", body: "WarbleCloud AI. Private beta closed." },
      { badge: "ink", badgeText: "Evaluation", title: "Frakma", body: "ML GitOps stack, LF native evaluation." },
    ],
    note: "Prefer avirka.ai for the product name. This domain remains valid.",
    howTitle: "Same path as Avirka",
    howIntro: "Data, train, evaluate, promote.",
    steps: [
      { title: "Data", body: "Start from the dataset and the definition of good." },
      { title: "ML + LLM", body: "Develop the model with an eval gate." },
      { title: "Run", body: "Self-host or hand off to a later stack." },
    ],
    contactLabel: "Avrika",
    contactTitle: "Same intake as Avirka.",
    contactLede: "LLM development with ML. Data-driven toolchain.",
    interests: [
      { value: "avirka-toolchain", label: "Data-driven toolchain" },
      { value: "avirka-llm", label: "LLM development" },
      { value: "avirka-selfhost", label: "Self-hosted model" },
      { value: "other", label: "Something else" },
    ],
    defaultInterest: "avirka-toolchain",
    messagePlaceholder: "Model job, data you have, why this domain…",
  },
};

const HOST_ALIASES = {
  "warblecloud-com.pages.dev": "warblecloud.com",
  "warblecloud-ai.pages.dev": "warblecloud.ai",
  "warblelabs-io.pages.dev": "warblelabs.io",
  "frakma-io.pages.dev": "frakma.io",
  "avirka-ai.pages.dev": "avirka.ai",
  "avrika-ai.pages.dev": "avrika.ai",
  "warble-future-production.up.railway.app": "warblecloud.com",
};

function brandKeyFromHost(host) {
  const h = (host || "").toLowerCase().replace(/^www\./, "").split(":")[0];
  if (BRANDS[h]) return h;
  if (HOST_ALIASES[h]) return HOST_ALIASES[h];
  if (h.endsWith(".warblecloud.com")) return "warblecloud.com";
  if (h.endsWith(".warblecloud.ai")) return "warblecloud.ai";
  if (h.endsWith(".warblelabs.io")) return "warblelabs.io";
  if (h.endsWith(".frakma.io")) return "frakma.io";
  if (h.endsWith(".avirka.ai")) return "avirka.ai";
  if (h.endsWith(".avrika.ai")) return "avrika.ai";
  return "warblecloud.com";
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
          <span class="wc-badge wc-badge-${item.badge}">${item.badgeText}</span>
          <h3 class="wc-engine-title">${item.title}</h3>
          <div class="wc-engine-line"></div>
          <p class="wc-engine-body">${item.body}</p>
        </article>`;
      }
      const link = item.href
        ? `<a class="wc-engine-stat" href="${item.href}" ${item.href.startsWith("/") ? "data-link" : 'rel="noopener"'}>${item.link}</a>`
        : "";
      return `<article class="wc-engine-card">
        <div class="wc-engine-tag">${item.tag}</div>
        <h3 class="wc-engine-title">${item.title}</h3>
        <div class="wc-engine-line"></div>
        <p class="wc-engine-body">${item.body}</p>
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

  setText("[data-brand-name]", brand.name);
  setText("[data-brand-short]", brand.short);
  setText("[data-brand-lede]", brand.lede);
  setText("[data-brand-brief]", brand.description);
  setText("[data-family-brief]", FAMILY);
  setText("[data-tagline]", TAGLINE);
  setText("[data-hero-h1]", brand.heroH1);
  setText("[data-hero-secondary]", brand.heroSecondary);
  setText("[data-announce-title]", brand.announceTitle);
  setText("[data-announce-body]", brand.announceBody);
  setText("[data-cta]", brand.cta);
  setText("[data-products-label]", brand.productsLabel);
  setText("[data-products-title]", brand.productsTitle);
  setText("[data-products-intro]", brand.productsIntro);
  setText("[data-closed-label]", brand.closedLabel);
  setText("[data-closed-title]", brand.closedTitle);
  setText("[data-closed-intro]", brand.closedIntro);
  setText("[data-note]", brand.note);
  setText("[data-how-title]", brand.howTitle);
  setText("[data-how-intro]", brand.howIntro);
  setText("[data-contact-label]", brand.contactLabel);
  setText("[data-contact-title]", brand.contactTitle);
  setText("[data-contact-lede]", brand.contactLede);

  const badges = document.querySelector("[data-badges]");
  if (badges) {
    badges.innerHTML = brand.badges
      .map((b, i) => `<span class="wc-badge ${i === 0 ? "wc-badge-violet" : "wc-badge-ink"}">${b}</span>`)
      .join("");
  }

  const metrics = document.querySelector("[data-metrics]");
  if (metrics) {
    metrics.innerHTML = brand.metrics
      .map(
        (m) => `<div class="wc-metric-card">
          <div class="wc-metric-value">${m.value}</div>
          <div class="wc-metric-label">${m.label}</div>
        </div>`,
      )
      .join("");
  }

  const track = document.querySelector("[data-carousel-track]");
  if (track) {
    track.innerHTML = brand.carousel
      .map(
        (slide) => `<article class="wc-carousel-slide">
          <p class="wc-eyebrow"><span class="dot" aria-hidden="true"></span>${slide.tag}</p>
          <h3>${slide.title}</h3>
          <p>${slide.body}</p>
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
          <div><h3>${s.title}</h3><p>${s.body}</p></div>
        </div>`,
      )
      .join("");
  }

  const interest = document.getElementById("interest");
  if (interest) {
    interest.innerHTML = brand.interests
      .map((opt) => `<option value="${opt.value}">${opt.label}</option>`)
      .join("");
    interest.value = brand.defaultInterest;
  }

  const message = document.getElementById("message");
  if (message) message.placeholder = brand.messagePlaceholder;

  window.__WARBLE_BRAND = { key, ...brand, family: FAMILY, tagline: TAGLINE };
}

applyBrand();
