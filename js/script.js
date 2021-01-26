new Swiper('.product-slider', {
  // Добавление стрелок управления
  navigation: {
    nextEl: '.swiper-product-button-next',
    // prevEl: '.swiper-button-prev'
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },
  mousewheel: {
    sensitivity: 1,
    eventsTarget: '.product-slider'
  },
  edgeSwipeThreshold: 20,  
  // slidesPerView: 2.2,
  slidesPerGroup: 2,
  speed: 800,
  spaceBetween: 30,
  // slidesPerColumn: 2,
  grabCursor: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },
    850: {
      slidesPerView: 2,
      slidesPerColumn: 2,
    },
    1095: {
      slidesPerView: 2.2,
      slidesPerColumn: 2,
    }
  }
});

new Swiper('.personal-offer-slider', {
  navigation: {
    nextEl: '.swiper-product-button-next',    
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },
  mousewheel: {
    sensitivity: 1,
    eventsTarget: '.personal-offer-slider'
  },
  slidesPerView: 3.34,
  slidesPerGroup: 2,
  speed: 800,
  spaceBetween: 30,
  grabCursor: true,  
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerColumn: 1,      
      spaceBetween: 0,
    },
    577: {
      slidesPerView: 2,
      spaceBetween: 20,
    },    
    993: {
      slidesPerView: 3,      
      slidesPerGroup: 2,
      spaceBetween: 30,
    },    
    1400: { 
      slidesPerView: 3.34,     
      spaceBetween: 30,
    },
  }
});

const animItems = document.querySelectorAll('._animation');

// Проверяем есть ли такие объекты с классом _animation
if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll); // Добавляем событие при скроле
  // Создаем запуск анимации при скроле
  function animOnScroll() {
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i], // Получаем элемент
            animItemHeight = animItem.offsetHeight, // Получаем высоту объекта
            animItemOffset = offset(animItem).top, // Получаем позицию объекта относительно top
            animStart = 4; // Коэффициент регулирующий запуск анимации

      let animItemPoint = window.innerHeight - animItemHeight / animStart; // Настройка начала анимации 

      // Делаем проверку усли высота объекта выше чем высота окна
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      // Добавление класса к объекту в нужный момент именно, когда мы доскроливаем до него            
      if (pageYOffset > (animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('_active');
      } else {
        // Реализовываем возможность повторна не показывать анимацию
        if (!animItem.classList.contains('_anim-no-hide')) {
          animItem.classList.remove('_active');
        }        
      }
    }
  }
  // Функция коректно вычисляет позицию объекта
  function offset(el) {
    const rect = el.getBoundingClientRect(),
          scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
  
  animOnScroll();
  //Вызываем функцию с небольшой задержкой
  // setTimeout(() => {
  //   animOnScroll();
  // }, 300);  
}