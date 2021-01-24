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
  slidesPerView: 2.2,
  slidesPerGroup: 2,
  speed: 800,
  spaceBetween: 30,
  slidesPerColumn: 2,
  grabCursor: true,
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
});

