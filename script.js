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
    fixedWidth: "30%",
    gap: "3rem",
    focus: "center",
    arrows: false,
    pagination: true,
    breakpoints: {
      600: {
        fixedWidth: "100%",
        padding: "3rem",
      },
    },
  }).mount();
});
