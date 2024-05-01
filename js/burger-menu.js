const menu = document.querySelector('.adaptive-menu');
const button = document.querySelector('.ham-btn');

button.addEventListener('click', () => {
    menu.classList.toggle('active');
})