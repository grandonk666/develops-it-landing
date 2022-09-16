const humberger = document.querySelector(".humberger-menu");
const bars = document.querySelectorAll(".humberger-menu div");
const nav = document.querySelector(".nav-links");
const root = document.documentElement;

const navColor = root.style.getPropertyValue("--nav-color");
const navBg = root.style.getPropertyValue("--nav-bg");

humberger.addEventListener("click", () => {
  bars.forEach((element) => {
    element.classList.toggle("active");
  });
  nav.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= 30) {
    root.style.setProperty("--nav-color", "#000000");
    root.style.setProperty("--nav-bg", "#ffffff");
    root.style.setProperty("--nav-shadow", "0px 2px 10px rgba(0, 0, 0, 0.25)");
  } else {
    root.style.setProperty("--nav-color", navColor);
    root.style.setProperty("--nav-bg", navBg);
    root.style.setProperty("--nav-shadow", "none");
  }
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
