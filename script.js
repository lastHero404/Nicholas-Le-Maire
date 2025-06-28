// JavaScript for interactive features

// Typing effect for #typing-text
document.addEventListener("DOMContentLoaded", function () {
    const typingText = document.getElementById("typing-text");
    if (!typingText) return;
    const phrases = [
        "Web Developer",
        "UI/UX Designer",
        "Full Stack Engineer",
        "Graphic Designer",
        "Chess Enthusiast"
    ];
    let phraseIndex = 0;
    let letterIndex = 0;
    let currentPhrase = "";
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        currentPhrase = phrases[phraseIndex];
        if (isDeleting) {
            typingText.textContent = currentPhrase.substring(0, letterIndex--);
            typingSpeed = 50;
            if (letterIndex < 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typingSpeed = 700;
            }
        } else {
            typingText.textContent = currentPhrase.substring(0, letterIndex++);
            typingSpeed = 100;
            if (letterIndex > currentPhrase.length) {
                isDeleting = true;
                typingSpeed = 1200;
            }
        }
        setTimeout(type, typingSpeed);
    }
    type();
});         
        // Mobile menu toggle
        const mobileMenuButton = document.querySelector('.mobile-menu-button');
        const mobileMenu = document.querySelector('.mobile-menu');
        const mobileMenuClose = mobileMenu.querySelector('button');
        
        function toggleMobileMenu() {
            mobileMenu.classList.toggle('hidden');
            document.body.style.overflow = mobileMenu.classList.contains('hidden') ? 'auto' : 'hidden';
            
            // Toggle hamburger/close icons
            document.querySelector('.hamburger').classList.toggle('hidden');
            document.querySelector('.close').classList.toggle('hidden');
        }
        
        mobileMenuButton.addEventListener('click', toggleMobileMenu);
        mobileMenuClose.addEventListener('click', toggleMobileMenu);

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.mobile-menu a').forEach(link => {
            link.addEventListener('click', toggleMobileMenu);
        });

        // Smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Theme toggle functionality
        const themeToggle = document.getElementById('theme-toggle');
        const themeIcon = document.getElementById('theme-icon');
        const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
        
        // Set initial theme
        if (localStorage.getItem('theme') === 'light' || (!localStorage.getItem('theme') && prefersLight)) {
            document.body.classList.add('light-mode');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }
        
        // Toggle theme
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            if (document.body.classList.contains('light-mode')) {
                themeIcon.classList.replace('fa-moon', 'fa-sun');
                localStorage.setItem('theme', 'light');
            } else {
                themeIcon.classList.replace('fa-sun', 'fa-moon');
                localStorage.setItem('theme', 'dark');
            }
        });
        
        // Animation on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('slide-in');
                }
            });
        }, {
            threshold: 0.1
        });

        document.querySelectorAll('.slide-in').forEach(el => {
            observer.observe(el);
        });
        