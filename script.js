// ==============================
// MOBILE MENU
// ==============================

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {

    nav.classList.toggle("active");

    menu.innerHTML = nav.classList.contains("active")
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';

});

// ==============================
// ACTIVE NAV LINK
// ==============================

const navLinks=document.querySelectorAll("nav a");

navLinks.forEach(link=>{

link.addEventListener("click",()=>{

navLinks.forEach(item=>item.classList.remove("active"));

link.classList.add("active");

});

});

// ==============================
// SCROLL ANIMATION
// ==============================

const sections=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

const trigger=window.innerHeight/1.2;

sections.forEach(section=>{

const top=section.getBoundingClientRect().top;

if(top<trigger){

section.style.opacity="1";

section.style.transform="translateY(0)";

}

});

});

// ==============================
// BUTTON HOVER
// ==============================

const buttons=document.querySelectorAll(".btn");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});

// ==============================
// TYPING EFFECT
// ==============================

const text="Frontend Developer";

let i=0;

const typing=document.getElementById("typing");

function type(){

if(i<text.length){

typing.innerHTML+=text.charAt(i);

i++;

setTimeout(type,100);

}

}

type();
