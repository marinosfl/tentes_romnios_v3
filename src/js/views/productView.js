import { elements } from '../base';

// expand product animation
const { product } = elements;

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
