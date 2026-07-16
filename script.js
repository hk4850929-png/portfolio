  // --- 1. DYNAMIC CANVAS PIXELS / AI ANIMATION ENGINE ---
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

let particlesArray = [];
const numberOfParticles = 60;
const mouse = { x: null, y: null, radius: 150 };

// Auto resizing windows
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Tracking mouse coordinate position
window.addEventListener('mousemove', (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

// Particle Object Blueprint
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Keep inside window bounds bounds
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;

        // Interactive mouse connection magnetism logic
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
            if (mouse.x < this.x && this.x < canvas.width - 10) this.x += 2;
            if (mouse.x > this.x && this.x > 10) this.x -= 2;
            if (mouse.y < this.y && this.y < canvas.height - 10) this.y += 2;
            if (mouse.y > this.y && this.y > 10) this.y -= 2;
        }
    }
    draw() {
        ctx.fillStyle = 'rgba(0, 240, 255, 0.6)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    particlesArray = [];
    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
    }
}

// Draw interconnective web vector lines
function connectParticles() {
    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
            let dx = particlesArray[a].x - particlesArray[b].x;
            let dy = particlesArray[a].y - particlesArray[b].y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {
                let opacity = (1 - (distance / 120)) * 0.15;
                ctx.strokeStyle = `rgba(0, 240, 255, ${opacity})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
    }
}

function animateBackground() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    connectParticles();
    requestAnimationFrame(animateBackground);
}

initParticles();
animateBackground();


// --- 2. GSAP INTERACTION ANCHORS & TEXT BOOT SEQUENCES ---
window.addEventListener('DOMContentLoaded', () => {
    // Elegant fade-in layout sequences 
    gsap.from('.navbar', { y: -50, opacity: 0, duration: 1, ease: 'power3.out' });
    gsap.from('.ai-badge', { scale: 0.8, opacity: 0, duration: 1, delay: 0.3, ease: 'back.out(2)' });
    gsap.from('.hero h1, .subtitle, .description, .hero .btn', {
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.5
    });
});


// --- 3. PROJECT CARD GLOW REFRACTION TRACKER ---
const cards = document.querySelectorAll('.project-card');
cards.forEach(card => {
    const glow = card.querySelector('.card-glow');
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - 150; // Offset half glow element width
        const y = e.clientY - rect.top - 150;
        glow.style.transform = `translate(${x}px, ${y}px)`;
    });
});
