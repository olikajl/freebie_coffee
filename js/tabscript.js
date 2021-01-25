window.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.gift-set-tabheader__item'),
        tabsContent = document.querySelectorAll('.gift-set-tabcontent'),
        tabsParent = document.querySelector('.gift-set-tabheader__items');
  
  //Функция скрытие табов и удаления класса gift-set-tabheader__item_active
  function hideTabContent() {
    tabsContent.forEach(item => {
      item.style.display = 'none';
    });

    tabs.forEach(item => {
      item.classList.remove('gift-set-tabheader__item_active');
    });
  }
  
  function showTabCotent(i = 0) {
    tabsContent[i].style.display = 'flex';
    tabs[i].classList.add('gift-set-tabheader__item_active');
  }

  hideTabContent();
  showTabCotent();

  tabsParent.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.classList.contains('gift-set-tabheader__item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabCotent(i);
        }
      });
    }
  });
});