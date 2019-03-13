import { elements } from './base';
import { checkProduct } from './views/productView';
import { topSwiper, bottomSwiper } from './slider';

//*******************//
// NAVBAR CONTROLLER //
//*******************//

const { navbar, sidebarIcons } = elements;

sidebarIcons.on('click', () => {
  sidebarIcons.toggleClass('active');
  navbar.toggleClass('active');
});

//********************//
// PRODUCT CONTROLLER //
//********************//

// expand product animation
const { product } = elements;

product.on('click', e => {
  const target = $(e.currentTarget);
  console.log('asda');
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
