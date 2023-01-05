// AOS.init();
document.querySelector(".menu-btn").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".menu-btn").classList.toggle("menu-btn_active");

  document.querySelector(".menu-nav").classList.toggle("menu-nav_active");
});

console.log(document.querySelector(".menu-btn"));

document.querySelectorAll(".menu-nav > a").forEach((item) => {
  item.addEventListener("click", function (e) {
    document.querySelector(".menu-btn").classList.toggle("menu-btn_active");

    document.querySelector(".menu-nav").classList.toggle("menu-nav_active");
  });
});

document.addEventListener("scroll", function (e) {
  document.querySelector(".menu-btn").classList.remove("menu-btn_active");

  document.querySelector(".menu-nav").classList.remove("menu-nav_active");
});
