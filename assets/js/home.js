/*=============== HOME SWIPER ===============*/
 var homeSwiper = new Swiper(".home-swiper", {
	  loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
});
/*=============== PRODUCT SWIPER ===============*/
const productSwiper = new Swiper('.product-swiper', {
  loop: true,
  spaceBetween: 24,
  slidesPerView: 3,

  navigation: {
    nextEl: '.product-next',
    prevEl: '.product-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});

/*=============== ELEVATE SWIPER ===============*/
 var homeSwiper = new Swiper(".product-elevate-swiper", {
	  loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
});
