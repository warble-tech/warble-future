const TAGLINE = "Enterprise software, built peacefully.";
const FAMILY =
  "Family of modern AI & cloud platforms (WarbleCloud, Warble Labs, Frakma, Avirka/Avrika) delivering intelligent automation, collaboration tools, and next-gen digital products.";

const BRANDS = {
  "warblecloud.com": {
    name: "WarbleCloud",
    short: "WarbleCloud",
    title: "WarbleCloud — real-time collaboration and AI-assisted workflows",
    description:
      "WarbleCloud — cloud platform for real-time collaboration, AI-assisted workflows, and scalable infrastructure. Modern, developer-friendly SaaS.",
    lede: "Cloud platform for real-time collaboration, AI-assisted workflows, and scalable infrastructure. Modern, developer-friendly SaaS.",
  },
  "warblecloud.ai": {
    name: "WarbleCloud AI",
    short: "WarbleCloud AI",
    title: "WarbleCloud AI — intelligent automation and smart infrastructure",
    description:
      "WarbleCloud AI — AI-powered cloud services focused on intelligent automation, generative tools, and smart infrastructure management.",
    lede: "AI-powered cloud services focused on intelligent automation, generative tools, and smart infrastructure management.",
  },
  "warblelabs.io": {
    name: "Warble Labs",
    short: "Warble Labs",
    title: "Warble Labs — experimental R&D for AI and cloud",
    description:
      "Warble Labs — experimental R&D lab for AI, cloud, and emerging tech prototypes. Innovation and open experimentation hub.",
    lede: "Experimental R&D lab for AI, cloud, and emerging tech prototypes. Innovation and open experimentation hub.",
  },
  "frakma.io": {
    name: "Frakma",
    short: "Frakma",
    title: "Frakma — modular digital products and decentralized applications",
    description:
      "Frakma — next-generation platform for modular digital products and decentralized applications. Clean, high-performance web presence.",
    lede: "Next-generation platform for modular digital products and decentralized applications. Clean, high-performance web presence.",
  },
  "avirka.ai": {
    name: "Avirka AI",
    short: "Avirka",
    title: "Avirka AI — practical automation and intelligent systems",
    description:
      "Avirka AI — AI-driven solutions for productivity, automation, and intelligent systems. Focused on practical, high-impact AI tools.",
    lede: "AI-driven solutions for productivity, automation, and intelligent systems. Focused on practical, high-impact AI tools.",
  },
  "avrika.ai": {
    name: "Avrika AI",
    short: "Avrika",
    title: "Avrika AI — original research-driven AI brand",
    description:
      "Avrika AI — original AI brand and platform for intelligent applications and research-driven AI products.",
    lede: "Original AI brand and platform for intelligent applications and research-driven AI products.",
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

  document.querySelectorAll("[data-brand-name]").forEach((el) => {
    el.textContent = brand.name;
  });
  document.querySelectorAll("[data-brand-short]").forEach((el) => {
    el.textContent = brand.short;
  });
  document.querySelectorAll("[data-brand-lede]").forEach((el) => {
    el.textContent = brand.lede;
  });
  document.querySelectorAll("[data-brand-brief]").forEach((el) => {
    el.textContent = brand.description;
  });
  document.querySelectorAll("[data-family-brief]").forEach((el) => {
    el.textContent = FAMILY;
  });
  document.querySelectorAll("[data-tagline]").forEach((el) => {
    el.textContent = TAGLINE;
  });

  window.__WARBLE_BRAND = { key, ...brand, family: FAMILY, tagline: TAGLINE };
}

applyBrand();
