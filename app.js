let menuToggler = document.querySelector(".nav__button");
let navLinks = document.querySelectorAll(".nav-link");
let body = document.querySelector("body");

menuToggler.addEventListener("click", () => {
    body.classList.toggle("open");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        body.classList.toggle("open");
    });
});

$(document).ready(function () {
    $(".slideshow").slick({
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        dots: true
    });

});