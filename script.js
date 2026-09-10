document.getElementById("year").textContent = new Date().getFullYear();

const sections = document.querySelectorAll(".timeline-item, .project-card, .about-grid, .section-heading");

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  sections.forEach((item) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(24px)";
    item.style.transition = "opacity .65s ease, transform .65s ease";
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  sections.forEach((item) => observer.observe(item));
}
