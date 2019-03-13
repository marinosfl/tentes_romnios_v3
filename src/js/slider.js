import Swiper from 'swiper';

export const topSwiper = new Swiper('.category--images > .swiper-container', {
  navigation: {
    nextEl: '.category--images > .swiper-container  > .swiper-button-next',
    prevEl: '.category--images > .swiper-container > .swiper-button-prev'
  },

  slidesPerView: 5.6,
  centeredSlides: true,
  spaceBetween: 2,
  loop: true,

  // slidesPerView: 'auto',
  // keyboardControl: true,
  // centeredSlides: true,
  // calculateHeight: true,
  // autoResize: true,
  // mode: 'horizontal',
  // loop: true
  breakpoints: {
    1440: {
      slidesPerView: 3.4
    },
    1024: {
      slidesPerView: 2.2,
      spaceBetween: 2
    },
    // 768: {
    //   slidesPerView: 1.4,
    //   spaceBetween: 2
    // },
    640: {
      slidesPerView: 1.8,
      spaceBetween: 2,
      centeredSlides: true
    },
    420: {
      slidesPerView: 1.4,
      spaceBetween: 2,
      centeredSlides: true
    }
  }
});

export const bottomSwiper = new Swiper(
  '.category__active > .swiper-container',
  {
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.category__active > .swiper-container  > .swiper-button-next',
      prevEl: '.category__active > .swiper-container > .swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      paginationClickable: true,
      type: 'bullets'
    }
  }
);

// var swiper = new Swiper('.swiper-container', {
//   slidesPerView: 5,
//   spaceBetween: 50,
//   // init: false,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev'
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true
//   },
//   breakpoints: {
//     1024: {
//       slidesPerView: 4,
//       spaceBetween: 40
//     },
//     768: {
//       slidesPerView: 3,
//       spaceBetween: 30
//     },
//     640: {
//       slidesPerView: 2,
//       spaceBetween: 20
//     },
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 10
//     }
//   }
// });
