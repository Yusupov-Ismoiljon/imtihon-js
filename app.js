const elmenu = document.getElementById('menu');
const elmenuOpen = document.getElementById('menu-open');
const elmenuExit = document.getElementById('menu-exit');

elmenuOpen.addEventListener('click', () => {
    elmenu.classList.toggle('hidden');
});

elmenuExit.addEventListener('click', () => {
    elmenu.classList.toggle('hidden');
});