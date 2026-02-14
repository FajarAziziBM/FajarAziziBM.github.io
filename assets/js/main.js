// =============================
// Microservice Configuration
// =============================

const services = [
  { id: "hero", path: "services/hero/hero.html" },
  { id: "about", path: "services/about/about.html" },
  { id: "projects", path: "services/projects/projects.html" },
  { id: "contact", path: "services/contact/contact.html" }
];

// =============================
// Section Loader
// =============================

async function loadSection(service) {
  try {
    const response = await fetch(service.path);
    const html = await response.text();
    document.getElementById(service.id).innerHTML = html;
  } catch (error) {
    console.error(`Error loading ${service.id}:`, error);
  }
}

// =============================
// Initialize App
// =============================

async function init() {
  for (const service of services) {
    await loadSection(service);
  }
  initAnimation();
}

init();

// =============================
// Scroll Animation Engine
// =============================

function initAnimation() {
  const elements = document.querySelectorAll(".fade-up");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach(el => observer.observe(el));
}
