const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuCont = document.querySelector(".mobile-menu-cont");
const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
    mobileMenu.style.display = "block";
    mobileMenuCont.classList.add("menu-come");
});
mobileMenu.addEventListener("click", () => {
    mobileMenuCont.classList.remove("menu-come");
    mobileMenu.style.display = "none";
});