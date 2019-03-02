const burger = document.querySelector('.burger');
const navbarMobile = document.querySelector('.navbar');

burger.addEventListener('click', e => {
  burger.classList.toggle('active');
  navbarMobile.classList.toggle('active');
});

const product = $('.product');

product.on('click', e => {
  target = $(e.currentTarget);

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
