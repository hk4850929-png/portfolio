// ===========================================
// MOBILE MENU
// ===========================================

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {

    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        menu.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menu.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }

});

// ===========================================
// CLOSE MENU AFTER CLICK
// ===========================================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        menu.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});

// ===========================================
// ACTIVE NAVIGATION
// ===========================================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===========================================
// TYPING EFFECT
// ===========================================

const words = [
    "Frontend Developer",
    "Web Designer",
    "BBA Student",
    "JavaScript Learner"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    if (!typing) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;

        }

    } else {

        typing.textContent = currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();

// ===========================================
// SCROLL TO TOP
// ===========================================

const topBtn = document.querySelector(".top-btn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ===========================================
// SCROLL REVEAL
// ===========================================

const revealElements = document.querySelectorAll(

    ".about-container,.skills-container,.projects-grid,.contact-container"

);

function reveal() {

    revealElements.forEach(element => {

        const top = element.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            element.style.opacity = "1";

            element.style.transform = "translateY(0)";

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();

// ===========================================
// IMAGE HOVER
// ===========================================

const images = document.querySelectorAll(".project-card img");

images.forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transform = "scale(1.05)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1)";

    });

});
