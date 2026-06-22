const menuButton = document.getElementById('menuButton');
const sidebar = document.getElementById('sidebar');
menuButton?.addEventListener('click', () => {
  const open = sidebar.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.side-nav a').forEach(link => link.addEventListener('click', () => {
  sidebar.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));
const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.side-nav a')];
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
  });
}, {rootMargin:'-35% 0px -55% 0px'});
sections.forEach(section => navObserver.observe(section));
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
}, {threshold:.12});
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('toTop').addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
