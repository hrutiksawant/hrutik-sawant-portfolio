// Toggle Navbar & Menu Icon for Mobile View[cite: 3]
const menubar = document.querySelector('#menu');
const Navbar = document.querySelector('.navbar');

if (menubar && Navbar) {
    menubar.onclick = () => {
        menubar.classList.toggle('bx-x');
        Navbar.classList.toggle('active');
    };
}

// Scroll Sections & Active Navbar Link Highlighting[cite: 3]
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            sec.classList.add('start-animation');
            navLinks.forEach(links => {
                links.classList.remove('active');
                let targetLink = document.querySelector(`header nav a[href*="${id}"]`);
                if (targetLink) {
                    targetLink.classList.add('active');
                }
            });
        }
    });

    // Sticky Header Effect[cite: 3]
    const header = document.querySelector('.header');
    if (header) {
        header.classList.toggle('sticky', window.scrollY > 100);
    }

    // Remove toggle icon and navbar on scroll for mobile view[cite: 3]
    if (menubar && Navbar) {
        menubar.classList.remove('bx-x');
        Navbar.classList.remove('active');
    }
};

// Close mobile menu automatically when any navigation link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (menubar && Navbar) {
            menubar.classList.remove('bx-x');
            Navbar.classList.remove('active');
        }
    });
});