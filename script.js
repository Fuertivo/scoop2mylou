// ================================
// HAMBURGER MENU
// ================================

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {

    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        menuToggle.innerHTML = "✕";
    } else {
        menuToggle.innerHTML = "☰";
    }

});

// Close mobile menu after clicking a link

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        menuToggle.innerHTML = "☰";

    });

});


// ================================
// STICKY HEADER
// ================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


// ================================
// REVEAL ANIMATION
// ================================

const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {

            section.classList.add("active");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ================================
// FLOATING PHONE MENU
// ================================

const phoneButton = document.querySelector(".phone-button");
const phoneMenu = document.querySelector(".phone-menu");

phoneButton.addEventListener("click", (e) => {

    e.stopPropagation();

    phoneMenu.classList.toggle("active");

});

// Close phone menu when clicking anywhere else

document.addEventListener("click", (e) => {

    if (
        !phoneMenu.contains(e.target) &&
        !phoneButton.contains(e.target)
    ) {

        phoneMenu.classList.remove("active");

    }

});


// ================================
// ACTIVE NAV LINK
// ================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("current");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("current");

        }

    });

});
