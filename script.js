const body = document.body;
const themeLabel = document.getElementById('theme-text');
const paletteLabel = document.getElementById('palette-text');
const palettes = [
    { name: 'lightblue', label: 'Light Blue' }, { name: 'seafoam', label: 'Sea Foam' },
    { name: 'peach', label: 'Peach / Coral' }, { name: 'gray', label: 'Nezumi / Gray' },
    { name: 'lavender', label: 'Lavender / Slate' }
];
let paletteIndex = Math.max(0, palettes.findIndex(({ name }) => name === localStorage.getItem('portfolio-palette-v7')));
const showPalette = () => { const palette = palettes[paletteIndex]; body.dataset.palette = palette.name; paletteLabel.textContent = palette.label; };
const setTheme = (isDark) => { body.classList.toggle('dark-mode', isDark); themeLabel.textContent = isDark ? 'LIGHT' : 'DARK'; };

setTheme(localStorage.getItem('portfolio-theme') === 'dark');
showPalette();
document.getElementById('theme-toggle').addEventListener('click', () => {
    const isDark = !body.classList.contains('dark-mode');
    setTheme(isDark);
    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
});
document.getElementById('palette-toggle').addEventListener('click', () => {
    paletteIndex = (paletteIndex + 1) % palettes.length;
    showPalette();
    localStorage.setItem('portfolio-palette-v7', palettes[paletteIndex].name);
});
