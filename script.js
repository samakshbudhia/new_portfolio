const body = document.body;
const themeToggle = document.getElementById('theme-toggle');
const themeLabel = document.getElementById('theme-text');

function applyTheme(isDark) {
    body.classList.toggle('dark-mode', isDark);
    themeLabel.textContent = isDark ? 'LIGHT' : 'DARK';
}

applyTheme(localStorage.getItem('portfolio-theme') === 'dark');

themeToggle.addEventListener('click', () => {
    const isDark = !body.classList.contains('dark-mode');
    applyTheme(isDark);
    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
});
