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

  // Delay supaya fade-up selesai dulu
  setTimeout(() => {
    initTypewriter();
  }, 1200);
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

// =============================
// REAL TYPEWRITER EFFECT
// =============================

function initTypewriter() {
  const element = document.getElementById("typingName");
  if (!element) return;

  const text = "Fajar Azizi Boang Manalu";
  let index = 0;

  function typeLetter() {
    if (index < text.length) {
      const span = document.createElement("span");
      span.textContent = text[index];
      span.classList.add("letter");

      element.appendChild(span);

      setTimeout(() => {
        span.classList.add("show");
      }, 50);

      index++;
      setTimeout(typeLetter, 80); // kecepatan ketik
    }
  }

  typeLetter();
}
