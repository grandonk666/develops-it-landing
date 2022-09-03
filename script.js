const humberger = document.querySelector(".humberger-menu");
const bars = document.querySelectorAll(".humberger-menu div");
const nav = document.querySelector(".nav-links");

humberger.addEventListener("click", () => {
  bars.forEach((element) => {
    element.classList.toggle("active");
  });
  nav.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", () => {
  new Splide(".splide", {
    type: "loop",
    padding: "3rem",
    gap: "3rem",
    arrows: false,
    pagination: true,
  }).mount();
});
