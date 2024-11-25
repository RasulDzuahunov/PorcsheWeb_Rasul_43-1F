const modal = document.getElementById('modal');
const btnOpenModal = document.getElementById('btn-get');
const btnCloseModal = document.getElementById('modal-close');
const mainContent = document.querySelector('.main-content');

btnOpenModal.addEventListener('click', () => {
    modal.style.display = 'flex';
    mainContent.classList.add('blurred');
});

btnCloseModal.addEventListener('click', () => {
    modal.style.display = 'none'; 
    mainContent.classList.remove('blurred'); 
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        mainContent.classList.remove('blurred');
    }
});
