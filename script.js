const humberger = document.querySelector(".humberger-menu");
const nav = document.querySelector(".nav-links");

humberger.addEventListener("click", () => {
  nav.classList.toggle("active");
});
