// ===========================================
// MOBILE MENU
// ===========================================

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
    nav.classList.toggle("active");

    menu.innerHTML = nav.classList.contains("active")
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
});

// Close menu after clicking a link
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menu.innerHTML = '<i class="fa-solid fa-bars"></i>';
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

        const top = section.offsetTop - 150;

        if (window.scrollY >= top) {
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

document.addEventListener("mousemove", e => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});

// Hide cursor on mobile
if(window.innerWidth < 768){
    cursor.style.display = "none";
}

// ===========================================
// TYPING EFFECT
// ===========================================

const typing = document.querySelector(".typing");

const words = [
    "Frontend Developer",
    "Web Designer",
    "React Learner",
    "JavaScript Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){

        typing.textContent =
        currentWord.substring(0,charIndex++);

        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1200);

            return;
        }

    }else{

        typing.textContent =
        currentWord.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,deleting ? 60 : 120);

}

typeEffect();

// ===========================================
// HEADER EFFECT
// ===========================================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        header.style.background="rgba(8,12,24,.95)";
        header.style.backdropFilter="blur(18px)";

    }else{

        header.style.background="rgba(255,255,255,.08)";

    }

});

// ===========================================
// SCROLL TO TOP BUTTON
// ===========================================

const topBtn = document.createElement("button");

topBtn.className="top-btn";

topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        topBtn.classList.add("show");

    }else{

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

// ===========================================
// REVEAL ANIMATION
// ===========================================

const revealItems = document.querySelectorAll(
".about-container,.skills-container,.projects-grid,.contact-container"
);

function reveal(){

    revealItems.forEach(item=>{

        const top=item.getBoundingClientRect().top;

        if(top < window.innerHeight-120){

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();

// ===========================================
// PROJECT CARD EFFECT
// ===========================================

const cards=document.querySelectorAll(".project-card");

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        card.style.transform=`
        perspective(1000px)
        rotateX(${-(y-rect.height/2)/30}deg)
        rotateY(${(x-rect.width/2)/30}deg)
        scale(1.03)
        `;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="perspective(1000px) rotateX(0) rotateY(0) scale(1)";

    });

});
