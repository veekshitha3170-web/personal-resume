const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");
toggle.addEventListener("click", () => {
  const opened = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(opened));
});
links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  links.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
}));
