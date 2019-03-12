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

  // adding event listener on back arrow after a product has been chosen so it doesnt overwrite product's click event
  const arrowBack = $(
    '.product.active .product__description > .item-heading > i'
  );

  arrowBack.on('click', e => {
    e.stopPropagation();
    product.removeClass('active');
    //unbinding arrow's event listener so product's click event is active on the arrow
    arrowBack.unbind('click');
  });
});

function checkProduct(target) {
  const root = document.documentElement;
  const first = $('.product:first-child');
  const second = $('.product:nth-child(2)');
  const third = $('.product:last-child');

  const productHeight = $('.product').height();

  if (target[0] == first[0]) {
    root.style.setProperty('--product-active', 0);
    setMaxHeight('first');
  } else if (target[0] == second[0]) {
    const height = '-' + productHeight + 'px';
    root.style.setProperty('--product-active', height);
    setMaxHeight('second');
  } else if (target[0] == third[0]) {
    const height = '-' + productHeight * 2 + 'px';
    root.style.setProperty('--product-active', height);
  }
}

function checkWindowWidth() {
  return $(window).width();
}

function setMaxHeight(activeProduct) {
  const windowWidth = checkWindowWidth();
  const root = document.documentElement;

  if (activeProduct === 'first') {
    if (windowWidth >= 1024) {
      root.style.setProperty('--max-height', 'calc(4 * (100vh / 3))');
    } else {
      root.style.setProperty('--max-height', 'calc(20rem * 3 + 12rem)');
    }
  } else if (activeProduct === 'second') {
    if (windowWidth >= 1024) {
      root.style.setProperty('--max-height', 'calc(3 * (100vh / 3))');
    } else {
      root.style.setProperty('--max-height', 'calc(20rem * 3 + 12rem');
    }
  }
}

// back arrow in active product

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
