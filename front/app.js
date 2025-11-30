// Script JS pour MyDoctor Homepage
// ------------------------------

console.log("MyDoctor homepage loaded!");

// Animation légère sur la recherche
const searchBtn = document.querySelector(".search-btn");

if (searchBtn) {
    searchBtn.addEventListener("click", () => {
        alert("Recherche en cours...");
    });
}

// Animation d'apparition (fade-in) des éléments
const fadeElements = document.querySelectorAll('.hero-text, .hero img');

window.addEventListener('load', () => {
    fadeElements.forEach(el => {
        el.style.opacity = 0;
        setTimeout(() => {
            el.style.transition = '1s';
            el.style.opacity = 1;
        }, 200);
    });
});
document.querySelector(".search-btn").addEventListener("click", () => {
    alert("Recherche en cours...");
});
//-------------------------------------------
// Smooth scroll pour les ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Animation fade-in pour les cards au scroll
const cards = document.querySelectorAll(".service-card, .testimonial-card, .about-text, .about-image");
window.addEventListener("scroll", () => {
    const triggerBottom = window.innerHeight * 0.9;
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < triggerBottom){
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
            card.style.transition = "all 0.6s ease-out";
        } else {
            card.style.opacity = "0";
            card.style.transform = "translateY(50px)";
        }
    });
});

// Initial setup pour cacher les cartes avant le scroll
cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
});
