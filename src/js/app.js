import { elements } from './base';
import { checkProduct } from './views/productView';
import { topSwiper, bottomSwiper } from './slider';
import Category from './models/Category';
import { renderTentesTerm, renderPergolesTerm } from './views/categoryView';

// global state of the app
const state = {};

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

//*********************//
// CATEGORY CONTROLLER //
//*********************//

const getPosts = async () => {
  state.pergoles = new Category('pergoles', 'pergoles_tax');

  state.tentes = new Category('tentes', 'tentes_tax');

  try {
    await state.tentes.getPosts();
    await state.pergoles.getPosts();
    // console.log(state);
  } catch (err) {
    alert('something went wrong in getPosts');
  }

  // isws na bgei ektos se diko tou function?
  try {
    await state.tentes.getTerms();
    await state.pergoles.getTerms();
    // console.log(state);
  } catch (err) {
    alert('somthing went wrong in getTerms');
  }

  state.pergoles.terms.map(term => {
    renderPergolesTerm(term);
  });

  state.tentes.terms.map(term => {
    renderTentesTerm(term);
  });

  console.log(state);

  // TODO na ftia3w to view twn terms tou category kai
  // na to kanw render meso tou controller (kai tou model??)
};

getPosts();
