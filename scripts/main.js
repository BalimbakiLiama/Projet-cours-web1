// Message de bienvenue personnalisé
document.addEventListener('DOMContentLoaded', function() {
    alert("« Croyons en Christ »\n« Il est juste et bon »\n\nBienvenue dans l'espace des servants de messe de Saint Joseph !");
});

// Effet hover sur les liens de navigation (version JS pour renforcer l'apprentissage)
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Changement de couleur du header au scroll (simple)
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    } else {
        header.style.boxShadow = 'none';
    }
});
