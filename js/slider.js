const swiper = new Swiper('.swiper', {
   loop: true,
   effect: 'fade',
   speed: 2000,

   pagination: {
      el: '.swiper-pagination',
   },
   autoplay: {
      delay: 1500,
   },
});