// Подсветка активного пункта меню
const sections = document.querySelectorAll('.weapon');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) current = section.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) link.classList.add('active');
  });
});

// Свернуть/развернуть детали
const toggleButtons = document.querySelectorAll('.toggle-details');
toggleButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const details = btn.closest('.weapon').querySelector('.details');
    details.classList.toggle('collapsed');
    btn.textContent = details.classList.contains('collapsed') ? '🔽' : '🔼';
  });
});

// Переключение светлой/тёмной темы
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeBtn.textContent = document.body.classList.contains('dark') ? '☀️ Светлая тема' : '🌙 Тёмная тема';
});