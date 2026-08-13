const routes = {
  "/": "home",
  "/products": "products",
  "/how-it-works": "how",
  "/contact": "contact",
};

function pageTitles() {
  const brand = window.__WARBLE_BRAND;
  const name = brand?.name || "WarbleCloud";
  return {
    home: brand?.title || `${name} — Enterprise software, built peacefully.`,
    products: `${name} — Products`,
    how: `${name} — How it works`,
    contact: `${name} — Contact`,
  };
}

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
  document.title = pageTitles()[key];
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

function initCarousel() {
  const root = document.getElementById("home-carousel");
  const track = root?.querySelector("[data-carousel-track]");
  const dots = root?.querySelector("[data-carousel-dots]");
  if (!root || !track) return;

  const slides = [...track.children];
  if (!slides.length) return;

  let index = 0;
  let timer = null;

  if (dots) {
    dots.innerHTML = slides
      .map((_, i) => `<button type="button" class="wc-carousel-dot" aria-label="Slide ${i + 1}" data-to="${i}"></button>`)
      .join("");
  }

  function go(next) {
    index = (next + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots?.querySelectorAll(".wc-carousel-dot").forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  function play() {
    stop();
    timer = window.setInterval(() => go(index + 1), 7000);
  }

  function stop() {
    if (timer) window.clearInterval(timer);
    timer = null;
  }

  root.querySelector("[data-carousel-prev]")?.addEventListener("click", () => {
    go(index - 1);
    play();
  });
  root.querySelector("[data-carousel-next]")?.addEventListener("click", () => {
    go(index + 1);
    play();
  });
  dots?.addEventListener("click", (event) => {
    const to = event.target.closest("[data-to]")?.dataset.to;
    if (to == null) return;
    go(Number(to));
    play();
  });
  root.addEventListener("mouseenter", stop);
  root.addEventListener("mouseleave", play);
  go(0);
  play();
}

initCarousel();

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
        host: window.location.hostname,
        brand: window.__WARBLE_BRAND?.key || "",
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
