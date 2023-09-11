const toggle = document.querySelector("#toggle");
const navmenu = document.querySelector(".nav-menu");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay");

toggle.addEventListener("click", function () {
  overlay.classList.toggle("active");
  toggle.classList.toggle("active");
  navmenu.classList.toggle("active");
});

window.addEventListener("click", function (e) {
  if (e.target == overlay) {
    overlay.classList.remove("active");
    toggle.classList.remove("active");
    navmenu.classList.remove("active");
  }
});
