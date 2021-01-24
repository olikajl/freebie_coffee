window.addEventListener('DOMContentLoaded', () => {
  const modalTrigger = document.querySelector('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');
  modalTrigger.addEventListener('click', () => {
    modal.classList.add('modal_active');
    modal.classList.remove('modal_hide');
    document.body.style.overflow = 'hidden';
  });

  modalCloseBtn.addEventListener('click', () => {
    modal.classList.add('modal_hide');
    modal.classList.remove('modal_active');
    document.body.style.overflow = '';
  });
  
  
});