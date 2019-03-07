import Swiper from 'swiper';

// burger
const burger = document.querySelector('.burger');
const navbarMobile = document.querySelector('.navbar');

burger.addEventListener('click', e => {
  burger.classList.toggle('active');
  navbarMobile.classList.toggle('active');
});

// const burger = $('.burger');
// const phone = $('.sidebar__icon .fa-phone');
// const sidebarIcons = $('.sidebar__icon');
// const navbarMobile = $('.navbar');

// sidebarIcons.on('click', () => {
//   sidebarIcons.toggleClass('active');
//   phone.toggleClass('active');
//   navbarMobile.toggleClass('active');
// });

// expand product animation
const product = $('.product');

product.on('click', e => {
  const target = $(e.currentTarget);

  checkProduct(target);
  product.removeClass('active');
  target.addClass('active');
});

function checkProduct(target) {
  const root = document.documentElement;
  const first = $('.product:first-child');
  const second = $('.product:nth-child(2)');
  const third = $('.product:last-child');

  const productHeight = $('.product').height();

  if (target[0] == first[0]) {
    root.style.setProperty('--product-active', 0);
  } else if (target[0] == second[0]) {
    const height = '-' + productHeight + 'px';
    root.style.setProperty('--product-active', height);
  } else if (target[0] == third[0]) {
    const height = '-' + productHeight * 2 + 'px';
    root.style.setProperty('--product-active', height);
  }
}

// back arrow in active product
const arrowBack = $('.product__description > .item-heading > i');

arrowBack.on('click', e => {
  e.stopPropagation();
  product.removeClass('active');
});

$(document).ready(function() {
  const swiper = new Swiper('.category--images > .swiper-container', {
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

  const swiper2 = new Swiper('.category__active > .swiper-container', {
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
  });

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
});
