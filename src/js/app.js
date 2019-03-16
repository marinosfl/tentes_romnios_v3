import { elements } from './base';
import { checkProduct } from './views/productView';
import { topSwiper, bottomSwiper } from './slider';
import Terms from './models/Terms';
import PostGallery from './models/PostGallery';
import { renderTentesTerm, renderPergolesTerm } from './views/termsView';

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

const arrowBackListener = () => {
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
};

const fetchTerms = async () => {
  const taxonomy = $('.product.active').data('taxonomy');
  state.productTerms = new Terms();

  try {
    await state.productTerms.getTerms(taxonomy);
  } catch (err) {
    alert('somthing went wrong in fetchTerms');
  }

  console.log(state);

  state.productTerms.terms.map(term => {
    if (taxonomy === 'tentes_tax') {
      renderTentesTerm(term);
    } else if (taxonomy === 'pergoles_tax') {
      renderPergolesTerm(term);
    }
  });
};

// expand product animation
const { product, menuTentes, menuPergoles, menuKataskeues } = elements;

product.on('click', async e => {
  const target = $(e.currentTarget);
  checkProduct(target);

  product.removeClass('active');
  target.addClass('active');

  arrowBackListener();
  await fetchTerms();
});

// expand product animation on menu item click
menuTentes.on('click', e => {
  const { firstProduct } = elements;

  const target = $(e.currentTarget);
  $('.sub-menu').hide();
  target.children('.sub-menu').show();

  product.removeClass('active');
  firstProduct.addClass('active');

  checkProduct(firstProduct);

  awaitarrowBackListener();
});

menuPergoles.on('click', e => {
  const { secondProduct } = elements;

  const target = $(e.currentTarget);
  $('.sub-menu').hide();
  target.children('.sub-menu').show();

  product.removeClass('active');
  secondProduct.addClass('active');

  checkProduct(secondProduct);

  arrowBackListener();
});

//*******************//
// SLIDER CONTROLLER //
//*******************//

// Updating the bottom slider according to which slide is active on top slider
const updateBottomSwiper = async () => {
  // getting post type and post id from DOM elements
  const postType = $('#post-type').data('post-type');
  const postId = $('.category--images .swiper-slide-active').data('post-id');

  // initiallizing new postGallery class in state
  state.post = new PostGallery();

  try {
    await state.post.getPostMeta(postType, postId);
  } catch {
    alert('something went wrong.. ');
  }

  const gallery = state.post.post.acf.gallery;
  console.log(gallery);

  // removing images of previous post
  bottomSwiper.removeAllSlides();

  // iterating new images and appending them to bottomSlider
  if (gallery) {
    gallery.forEach(meta => {
      bottomSwiper.appendSlide(
        `<div class="swiper-slide">
        <img src="${meta.url}" alt="">
      </div>`
      );
    });
  }
  // updaring bottom slider
  bottomSwiper.update();
};

// calling updateBottomSwiper on topSwiper init to get the gallery of the first post
topSwiper.on('init', () => {
  updateBottomSwiper();
});
// initializing swiper manually because auto initialization is turned of in order to be able to add event listener on 'init'
topSwiper.init();

// upading the gallery of shown post
topSwiper.on('transitionEnd', updateBottomSwiper);
