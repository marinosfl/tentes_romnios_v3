import { elements } from './base';

const { contactForm } = elements;

contactForm.on('submit', e => {
  e.preventDefault();

  const name = $('[name="name"]').val();
  const email = $('[name="email"]').val();
  const address = $('[name="address"]').val();
  const tel = $('[name="tel"]').val();
  const message = $('[name="message"]').val();

  const url = `${$('[name="url"]').val()}/contact-ajax.php`;
  const type = $('#contact-form').attr('method');

  const data = {
    name,
    email,
    address,
    tel,
    message
  };

  $.ajax({
    url,
    type,
    data,
    success: res => {
      $('#contact-form .contact--field').val('');
    }
  });
});
