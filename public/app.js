const routes = { "/": "home", "/products": "products", "/contact": "contact" };

function pathOf(href) {
  return new URL(href, window.location.origin).pathname.replace(/\/+$/, "") || "/";
}

function show(path) {
  const key = routes[path];
  if (!key) {
    history.replaceState({}, "", "/");
    return show("/");
  }
  document.querySelectorAll(".page").forEach((el) => el.classList.toggle("active", el.id === `page-${key}`));
  document.querySelectorAll("[data-nav]").forEach((el) => el.classList.toggle("active", el.dataset.nav === key));
  document.getElementById("nav-links")?.classList.remove("open");
  const brand = window.__WARBLE_BRAND;
  if (brand) document.title = `${brand.name} — ${brand.tagline}`;
  window.scrollTo(0, 0);
}

document.addEventListener("click", (event) => {
  const link = event.target.closest("[data-link]");
  if (!link) return;
  const url = new URL(link.href, window.location.origin);
  if (url.origin !== window.location.origin) return;
  event.preventDefault();
  history.pushState({}, "", url.pathname);
  show(url.pathname);
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
  try {
    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, page: window.location.pathname }),
    });
    const payload = await res.json().catch(() => ({}));
    if (!res.ok || !payload.ok) throw new Error(payload.error || "Could not send.");
    form.reset();
    statusEl.textContent = "Received.";
    statusEl.classList.add("ok");
  } catch (err) {
    statusEl.textContent = err.message || "Email contact@warblecloud.com.";
    statusEl.classList.add("error");
  } finally {
    submitBtn.disabled = false;
  }
});
