/* ==========================================
   MOBILE MENU
========================================== */

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


/* ==========================================
   CLOSE MENU AFTER CLICK
========================================== */

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");
        menu.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});


/* ==========================================
   TYPING EFFECT
========================================== */

const text = [
    "Frontend Web Developer",
    "BCA 2nd Year Student",
    "JavaScript Developer",
    "React Learner"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === text.length){
        count = 0;
    }

    currentText = text[count];

    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if(letter.length === currentText.length){

        count++;
        index = 0;

        setTimeout(type,1500);

    }
    else{

        setTimeout(type,120);

    }

})();


/* ==========================================
   ACTIVE NAVBAR
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 120;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});


/* ==========================================
   SCROLL TO TOP
========================================== */

const topBtn = document.querySelector(".top-btn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        topBtn.classList.add("show");

    }
    else{

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});


/* ==========================================
   SCROLL REVEAL
========================================== */

const reveals = document.querySelectorAll(

".about-container,.education-card,.skill-card,.project-card,.contact-container"

);

window.addEventListener("scroll", reveal);

function reveal(){

    const trigger = window.innerHeight - 100;

    reveals.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        if(top < trigger){

            item.classList.add("show");

        }

    });

}

reveal();


/* ==========================================
   HERO IMAGE PARALLAX
========================================== */

const heroImage = document.querySelector(".hero-image img");

window.addEventListener("mousemove",(e)=>{

    const x = (window.innerWidth/2 - e.pageX)/40;
    const y = (window.innerHeight/2 - e.pageY)/40;

    heroImage.style.transform =
    `translate(${x}px,${y}px)`;

});


/* ==========================================
   PRELOADER (Optional)
========================================== */

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});


console.log("Portfolio Loaded Successfully 🚀");

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

menu.addEventListener("click",()=>{

nav.classList.toggle("active");

menu.innerHTML=nav.classList.contains("active")

? '<i class="fa-solid fa-xmark"></i>'

: '<i class="fa-solid fa-bars"></i>';

});
