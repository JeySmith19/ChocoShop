function toggleMenu() {
  var navToggle = document.querySelector(".nav-toggle");
  navToggle.classList.toggle("active");
}
document.addEventListener("click", function(event) {
  var navMenu = document.querySelector(".nav-links");
  var navToggle = document.querySelector(".nav-toggle");
  var isClickInsideNav = navMenu.contains(event.target) || navToggle.contains(event.target);
  if (!isClickInsideNav) {
    navToggle.classList.remove("active");
  }
});
