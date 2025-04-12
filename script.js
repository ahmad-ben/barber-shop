const topNav = document.querySelector(".nav-links");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
  topNav.classList.add("show")
});

topNav.addEventListener("click", () => {
  topNav.classList.remove("show")
});