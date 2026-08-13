const routes = {
  "/": "home",
  "/products": "products",
  "/how-it-works": "how",
  "/contact": "contact",
};

const titles = {
  home: "Warble — Open-source Kubernetes agent ops",
  products: "Products — Warble OSS + private beta",
  how: "How it works — Scan, observe, propose",
  contact: "Request private beta — Warble",
};

function pathOf(href) {
  const url = new URL(href, window.location.origin);
  return url.pathname.replace(/\/+$/, "") || "/";
}

function show(path) {
  const key = routes[path] || null;
  if (!key) {
    history.replaceState({}, "", "/");
    return show("/");
  }

  document.querySelectorAll(".page").forEach((el) => el.classList.remove("active"));
  document.getElementById(`page-${key}`)?.classList.add("active");
  document.title = titles[key];
  document.querySelectorAll("[data-nav]").forEach((el) => {
    el.classList.toggle("active", el.dataset.nav === key);
  });
  document.getElementById("nav-links")?.classList.remove("open");
  window.scrollTo(0, 0);
}

function navigate(href, push = true) {
  const path = pathOf(href);
  if (push) history.pushState({ path }, "", path);
  show(path);
}

document.addEventListener("click", (event) => {
  const link = event.target.closest("[data-link]");
  if (!link) return;
  const url = new URL(link.href, window.location.origin);
  if (url.origin !== window.location.origin) return;
  event.preventDefault();
  navigate(url.pathname);
});

window.addEventListener("popstate", () => show(pathOf(window.location.href)));

document.getElementById("menu-toggle")?.addEventListener("click", () => {
  document.getElementById("nav-links")?.classList.toggle("open");
});

document.getElementById("year").textContent = String(new Date().getFullYear());
show(pathOf(window.location.href));

const form = document.getElementById("lead-form");
const statusEl = document.getElementById("lead-status");
const submitBtn = document.getElementById("lead-submit");

form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  statusEl.textContent = "";
  statusEl.className = "form-status";

  const data = Object.fromEntries(new FormData(form).entries());
  if (!data.name?.trim() || !data.email?.trim()) {
    statusEl.textContent = "Name and work email are required.";
    statusEl.classList.add("error");
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = "Sending…";

  try {
    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        page: window.location.pathname,
      }),
    });
    const payload = await res.json().catch(() => ({}));
    if (!res.ok || !payload.ok) {
      throw new Error(payload.error || "Something went wrong.");
    }
    form.reset();
    statusEl.textContent = "Thanks. We’ll follow up with more information shortly.";
    statusEl.classList.add("ok");
  } catch (err) {
    statusEl.textContent = err.message || "Could not send. Email contact@warblecloud.com.";
    statusEl.classList.add("error");
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Send request";
  }
});
