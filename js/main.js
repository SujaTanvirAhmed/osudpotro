// let screenWidth = window.innerWidth;
// console.log(screenWidth);
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("close");
    mobileMenu.classList.toggle("mobile-menu-open");
});
