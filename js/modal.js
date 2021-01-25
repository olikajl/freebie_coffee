window.addEventListener('DOMContentLoaded', () => {
  const modalTrigger = document.querySelector('[data-modal]'),
        modal = document.querySelector('.modal'),        
        modalCloseBtn = document.querySelector('[data-close]'),
        videoModal = document.getElementById('video-modal');      
      

  modalTrigger.addEventListener('click', () => {
    modal.classList.add('modal_active');
    modal.classList.remove('modal_hide');    
    document.body.style.overflow = 'hidden';
    videoModal.src = 'https://www.youtube.com/embed/NmCTnxKNTfg';        
  });

  modalCloseBtn.addEventListener('click', () => {
    modal.classList.add('modal_hide');
    modal.classList.remove('modal_active');    
    document.body.style.overflow = '';
    videoModal.src = 'not.found/404';
    videoModal.currentTime = 0;
  });
  
  
});