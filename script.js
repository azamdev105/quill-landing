const sidebar = document.querySelector('.sidebar');
const menu = document.querySelector('#menu');
const close = document.querySelector('#close');
const sidebarLinks = document.querySelectorAll('.sidebar a');

const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

menu.addEventListener('click', () => {
    sidebar.classList.add('open');
    overlay.style.display = 'block';
});

close.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.style.display = 'none';
});

overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.style.display = 'none';
});

sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('open');
        overlay.style.display = 'none';
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.animate').forEach(el => observer.observe(el));