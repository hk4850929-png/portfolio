// ===========================================
// MOBILE MENU
// ===========================================

const menuBtn = document.querySelector(".menu");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// ===========================================
// CLOSE MENU WHEN LINK IS CLICKED
// ===========================================

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

// ===========================================
// ACTIVE NAVIGATION
// ===========================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

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
// CUSTOM CURSOR
// ===========================================

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});

// ===========================================
// SCROLL TO TOP BUTTON
// ===========================================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className = "top-btn";

document.body.appendChild(topBtn);

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
// REVEAL ANIMATION
// ===========================================

const reveals = document.querySelectorAll(
".about-container,.skills-container,.projects-grid,.contact-container"
);

function revealSection(){

    reveals.forEach(item=>{

        const top=item.getBoundingClientRect().top;

        const visible=window.innerHeight-120;

        if(top<visible){

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll",revealSection);

revealSection();

// ===========================================
// HERO TYPING EFFECT
// ===========================================

const typing = document.querySelector(".typing");

const words = [

"Frontend Developer",

"Web Designer",

"JavaScript Developer",

"React Learner"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    const current = words[wordIndex];

    if(!deleting){

        typing.textContent = current.substring(0,charIndex);

        charIndex++;

        if(charIndex > current.length){

            deleting = true;

            setTimeout(typeEffect,1200);

            return;

        }

    }else{

        typing.textContent = current.substring(0,charIndex);

        charIndex--;

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,deleting?60:120);

}

typeEffect();

// ===========================================
// HEADER BACKGROUND ON SCROLL
// ===========================================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.style.background="rgba(8,12,24,.95)";

    }else{

        header.style.background="rgba(255,255,255,.08)";

    }

});

// ===========================================
// PROJECT CARD HOVER EFFECT
// ===========================================

const cards = document.querySelectorAll(".project-card");

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        card.style.transform=
        `perspective(1000px)
        rotateX(${-(y-rect.height/2)/25}deg)
        rotateY(${(x-rect.width/2)/25}deg)
        scale(1.03)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="perspective(1000px) rotateX(0) rotateY(0)";

    });

});
