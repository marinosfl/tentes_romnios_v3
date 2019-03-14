import { elements } from '../base';

const { root, product, firstProduct, secondProduct, thirdProduct } = elements;

export const checkProduct = target => {
  const productHeight = product.height();
  // console.log(target);
  // console.log(secondProduct);

  if (target[0] == firstProduct[0]) {
    root.style.setProperty('--product-active', 0);
    setMaxHeight('first');
  } else if (target[0] == secondProduct[0]) {
    console.log('asda');
    const height = '-' + productHeight + 'px';
    root.style.setProperty('--product-active', height);
    setMaxHeight('second');
  } else if (target[0] == thirdProduct[0]) {
    const height = '-' + productHeight * 2 + 'px';
    root.style.setProperty('--product-active', height);
  }

  if (checkWindowWidth() < 1024) {
    console.log(checkWindowWidth);
    elements.navbar.removeClass('active');
    elements.sidebarIcons.removeClass('active');
  }
};

function checkWindowWidth() {
  return $(window).width();
}

function setMaxHeight(activeProduct) {
  const windowWidth = checkWindowWidth();

  if (activeProduct === 'first') {
    if (windowWidth >= 1024) {
      root.style.setProperty('--max-height', 'calc(4 * (100vh / 3))');
    } else if (windowWidth > 840) {
      root.style.setProperty('--max-height', 'calc(20rem * 3 + 12rem)');
    } else {
      root.style.setProperty('--max-height', 'calc(20rem * 5 + 12rem)');
    }
  } else if (activeProduct === 'second') {
    if (windowWidth >= 1024) {
      root.style.setProperty('--max-height', 'calc(3 * (100vh / 3))');
    } else if (windowWidth > 840) {
      root.style.setProperty('--max-height', 'calc(20rem * 3 + 12rem');
    } else {
      root.style.setProperty('--max-height', 'calc(20rem * 4 + 12rem)');
    }
  }
}
