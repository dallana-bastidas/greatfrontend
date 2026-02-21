//console.log("JS cargado");
//const menuToggle = document.getElementById("menu-toggle");
//const mobileMenu = document.getElementById("mobile-menu");
//const icon = menuToggle.querySelector("i");
//const toggleMenu = () => {
// mobileMenu.classList.toggle("hidden");
//};

//lucide.createIcons();

//menuToggle.addEventListener("click", () => {
// mobileMenu.classList.toggle("hidden");
// console.log("Click detectado");

//  if (mobileMenu.classList.contains("hidden")) {
//    icon.setAttribute("data-lucide", "menu");
//  } else {
//      icon.setAttribute("data-lucide", "x");
// }

// lucide.createIcons();
//});

const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");

lucide.createIcons();

const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
};

menuToggle.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenu);
