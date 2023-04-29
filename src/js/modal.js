const btnOpenModal = document.querySelector('.js-open-modal');
const btnCloseModal = document.querySelector('.js-close-modal');

btnOpenModal.addEventListener('click', (e) => {
  e.preventDefault();
  let tagHtml = document.documentElement;
  tagHtml.classList.add('show-modal');
})

btnCloseModal.addEventListener('click', () => {
  let tagHtml = document.documentElement;
  tagHtml.classList.remove('show-modal');
})
