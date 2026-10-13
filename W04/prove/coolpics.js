const menuButton = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuButton.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', nav.classList.contains('open'));
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 1000) {
        nav.classList.remove('open');
        menuButton.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
    }
});

const gallery = document.querySelector('.images');
const modal = document.querySelector('#image-modal');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-btn');

gallery.addEventListener('click', (event) => {
    const clickedImage = event.target.closest('img');
    if (!clickedImage) return;

    modalImage.src = clickedImage.src.replace('-sm', '-full');
    modalImage.alt = clickedImage.alt;
    modal.showModal();
});

closeButton.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.open) {
        modal.close();
    }
});