//  NAVBAR COLOR CHANGE when scrolling
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = '#0F0A05'; // Darker when scrolled
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)'; // Add shadow
    } else {
        navbar.style.backgroundColor = '#1C1208'; // Original color
        navbar.style.boxShadow = 'none'; // Remove shadow
    }
});

//  SKILL CARDS HOVER ANIMATION
const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-10px)'; // Move up
        this.style.transition = 'transform 0.3s ease';
        this.style.boxShadow = '0 10px 20px rgba(153, 0, 17, 0.3)'; // Add glow
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)'; // Move back down
        this.style.boxShadow = 'none'; // Remove glow
    });
});

//  PROJECT CARDS HOVER ANIMATION
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.05)'; // Make slightly bigger
        this.style.transition = 'transform 0.3s ease';
        this.style.boxShadow = '0 15px 30px rgba(153, 0, 17, 0.4)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)'; // Back to normal size
        this.style.boxShadow = 'none';
    });
});
