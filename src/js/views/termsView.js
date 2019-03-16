import { elements } from '../base';

const createMarkup = term => {
  const markup = `<a href="${
    term.link
  }" class="product__category" style="background-image:url(${
    term.acf.image
  });" data-term="${term.slug}">
                     <h2 class="product__category--title">${term.name}</h2>
                     <div class="product__category--content">
                      <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio quo quasi minus quod!</p>
                      <i class="fas fa-angle-down"></i>
                     </div>
                  </a>`;

  return markup;
};

export const renderTentesTerm = term => {
  const markup = createMarkup(term);
  $('.product__tentes .product__categories').append(markup);
};

export const renderPergolesTerm = term => {
  const markup = createMarkup(term);
  $('.product__pergoles .product__categories').append(markup);
};

// `<div class="category__container--item category--tentes__container--item" style="background-image:url(${
//   term.acf.image
// });">
//                   <a href="${
//                     term.link
//                   }" class="category__container--item--content">
//                     <h3 class="category__container--item--title">${
//                       term.name
//                     }</h3>
//                     <p class="category__container--item--text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nulla eaque qui Lorem ipsum dolor sit amet.</p>
//                     <i class="fas fa-chevron-down"></i>
//                   </a>
//                 </div>`
