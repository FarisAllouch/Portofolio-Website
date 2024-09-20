let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let header = document.querySelector('header');

document.addEventListener('DOMContentLoaded', () => {
    const typed = new Typed('.multiple-text', {
        strings: ['Fullstack Web Developer', 'Focused on Frontend development'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    });
    
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
 };

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
    ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .technologies-container .education-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
});