// Navigation
document.addEventListener('DOMContentLoaded', () => {
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');

    // Mobile menu toggle
navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    navToggle.classList.toggle('active');
});

    // Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Active navigation link on scroll
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').slice(1) === current) {
                item.classList.add('active');
            }
        });

        // Navbar background on scroll
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

// Form submission
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Add your form submission logic here
    const formData = new FormData(form);
    console.log('Form submitted:', Object.fromEntries(formData));
    
    // Example animation for form submission
    const submitBtn = form.querySelector('.submit-btn');
    submitBtn.innerHTML = 'Message Sent!';
    submitBtn.classList.add('success');
    
    setTimeout(() => {
        submitBtn.innerHTML = 'Send Message';
        submitBtn.classList.remove('success');
        form.reset();
    }, 3000);
});

