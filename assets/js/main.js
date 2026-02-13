// Load microservice sections
async function loadSection(id, path) {
  const response = await fetch(path);
  const data = await response.text();
  document.getElementById(id).innerHTML = data;
}

loadSection("hero", "services/hero/hero.html");
loadSection("about", "services/about/about.html");
loadSection("projects", "services/projects/projects.html");
loadSection("contact", "services/contact/contact.html");


// Scroll Animation
window.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".fade-up");

  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      el.classList.add("show");
    }
  });
});
