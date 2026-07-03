const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  toggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

const header = document.querySelector('.header');
const hero = document.querySelector('.hero');

function updateHeader() {
  const heroBottom = hero.offsetHeight;
  const scrolled = window.scrollY > 50;

  header.classList.toggle('scrolled', scrolled);
  header.classList.toggle('hero-top', window.scrollY < heroBottom - 80);
}

updateHeader();
window.addEventListener('scroll', updateHeader);
window.addEventListener('resize', updateHeader);
