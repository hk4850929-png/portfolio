// ===========================================
// MOBILE MENU
// ===========================================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
});

// ===========================================
// TYPING EFFECT
// ===========================================

const typingText = document.getElementById("typing");

const words = [
    "Frontend Developer",
    "BCA Student",
    "UI Designer",
    "Web Developer",
    "Creative Coder"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 120);

}

typeEffect();

// ===========================================
// ACTIVE NAVBAR LINK
// ===========================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {

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
// HEADER SHADOW
// ===========================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 10px 25px rgba(0,0,0,.35)";

    } else {

        header.style.boxShadow = "none";

    }

});

// ===========================================
// SCROLL REVEAL
// ===========================================

const revealItems = document.querySelectorAll(
    ".hero-text, .hero-image, .about-card, .skill-box, .project-card, .contact form"
);

function revealOnScroll() {

    revealItems.forEach(item => {

        const top = item.getBoundingClientRect().top;

        const visible = window.innerHeight - 100;

        if (top < visible) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }

    });

}

revealItems.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "all .8s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// ===========================================
// BUTTON RIPPLE EFFECT
// ===========================================

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

    });

});

// ===========================================
// CONSOLE MESSAGE
// ===========================================

console.log("%cWelcome to Harshit Kumar's Portfolio 🚀",
"color:#00D4FF;font-size:18px;font-weight:bold;");
