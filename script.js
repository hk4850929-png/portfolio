// ===========================
// Mobile Menu
// ===========================

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

if(menu){
    menu.addEventListener("click", () => {
        nav.classList.toggle("active");

        menu.innerHTML = nav.classList.contains("active")
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
    });
}

// ===========================
// Scroll Animation
// ===========================

const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.2
});

document.querySelectorAll(
".about-container,.education-card,.skill-card,.project-card,.certificate-card,.contact-container"
).forEach(el=>observer.observe(el));

// ===========================
// Scroll To Top
// ===========================

const topBtn=document.querySelector(".top-btn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){
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
