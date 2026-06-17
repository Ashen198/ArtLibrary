/*=============== HOME SWIPER ===============*/
 
/*=============== PRODUCT SWIPER ===============*/

/*=============== ELEVATE SWIPER ===============*/

/*=============== BANNER CARDS SWIPER ===============*/
const bannerSwiper = new Swiper('.banner-swiper', {
  slidesPerView: 1.15,
  spaceBetween: 20,
  centeredSlides: false,
  loop: false,
  navigation: {
    nextEl: '.banner-sweep-next',
    prevEl: '.banner-sweep-prev',
  },
  pagination: {
    el: '.banner-swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    600: { slidesPerView: 1.8, spaceBetween: 24 },
    900: { slidesPerView: 2.5, spaceBetween: 28 },
    1200: { slidesPerView: 3.2, spaceBetween: 32 },
    1440: { slidesPerView: 3.6, spaceBetween: 36 },
  }
});
