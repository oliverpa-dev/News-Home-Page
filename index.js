"use strict";

const btnOpen = document.getElementById("button-open");
const btnClose = document.getElementById("button-close");
const nav = document.getElementById("nav");
const html = document.querySelector("html");

// open the nav
btnOpen.addEventListener("click", () => {
  nav.style.transform = "translateX(0)";
  html.style.overflowY = "hidden";
});

// close the nav
btnClose.addEventListener("click", () => {
  nav.style.transform = "translateX(120%)";
  html.style.overflowY = "visible";
});
