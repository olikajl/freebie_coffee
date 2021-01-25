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

