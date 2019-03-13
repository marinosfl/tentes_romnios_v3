import { elements } from '../base';

export const renderTerm = term => {
  const markup = `<div class="category__container--item category--tentes__container--item" style="background-image:url(${
    term.acf.image
  });">
                    <a href="${
                      term.link
                    }" class="category__container--item--content">
                      <h3 class="category__container--item--title">${
                        term.name
                      }</h3>
                      <p class="category__container--item--text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nulla eaque qui Lorem ipsum dolor sit amet.</p>
                      <i class="fas fa-chevron-down"></i>
                    </a>
                  </div>`;
  $('.category--tentes__container').append(markup);
};
