$(document).ready(function() {
  $('.hero__burger').click(function(event) {
    $('.hero__burger').toggleClass('hero__burger_active');
    $('.hero-menu').toggleClass('hero-menu_active');
    $('body').toggleClass('lock'); //класс для блокировки прокрутки

  });
});