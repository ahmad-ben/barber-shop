// const nav = document.querySelector(".nav"),
//   searchIcon = document.querySelector("#searchIcon"),
//   navOpenBtn = document.querySelector(".navOpenBtn"),
//   navCloseBtn = document.querySelector(".navCloseBtn");
// searchIcon.addEventListener("click", () => {
//   nav.classList.toggle("openSearch");
//   nav.classList.remove("openNav");
//   if (nav.classList.contains("openSearch")) {
//     return searchIcon.classList.replace("uil-search", "uil-times");
//   }
//   searchIcon.classList.replace("uil-times", "uil-search");
// });
// navOpenBtn.addEventListener("click", () => {
//   nav.classList.add("openNav");
//   nav.classList.remove("openSearch");
//   searchIcon.classList.replace("uil-times", "uil-search");
// });
// navCloseBtn.addEventListener("click", () => {
//   nav.classList.remove("openNav");
// });

const topNav = document.querySelector(".nav-links");
const menuBtn = document.querySelector(".menu-btn");
const closeNavBtn = document.querySelector(".close-btn");
const sectionsHref = document.querySelectorAll(".section-href");

menuBtn.addEventListener("click", () => {
  topNav.classList.add("show")
});

topNav.addEventListener("click", () => {
  topNav.classList.remove("show")
});


// sectionsHref.forEach((sectionHref) => {
//   sectionHref.addEventListener("click", () => {
//     topNav.classList.remove("show")
//   });
// })