const nav = document.querySelector("#navbar");
const open = document.querySelector("#open-button");
const close = document.querySelector("#close-button");

open.addEventListener("click", () => {
  nav.classList.add("visible");
});

close.addEventListener("click", () => {
  nav.classList.remove("visible");
});

let links = document.querySelectorAll("a.navlink");

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("visible");
  });
});
