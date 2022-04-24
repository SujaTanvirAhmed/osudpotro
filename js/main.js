const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuCont = document.querySelector(".mobile-menu-cont");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
    let pos = -240;
    const intervalId = setInterval(() => {
        if (pos === 0) {
            clearInterval(intervalId);
        }
        else {
            pos = pos + 10;
            mobileMenuCont.style.right = pos + "px";
        }
    }, 1);
    mobileMenu.style.display = "block";
});

mobileMenu.addEventListener("click", () => {
    let pos = 0;
    const intervalId = setInterval(() => {
        if (pos === -240) {
            clearInterval(intervalId);
        }
        else {
            pos = pos - 10;
            mobileMenuCont.style.right = pos + "px";
        }
    }, 1);
    setTimeout(() => {
        mobileMenu.style.display = "none";
    }, 500);

});