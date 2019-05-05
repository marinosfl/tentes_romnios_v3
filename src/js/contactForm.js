import { elements } from './base';

const { contactForm } = elements;

contactForm.on('submit', e => {
  e.preventDefault();

  const name = $('[name="name"]').val();
  const email = $('[name="email"]').val();
  const message = $('[name="message"]').val();

  const url = `${$('[name="url"]').val()}/contact-ajax.php`;
  const type = $('#contact-form').attr('method');

  const data = {
    name,
    email,
    message
  };

  $.ajax({
    url,
    type,
    data,
    success: res => {
      const data = JSON.parse(res);
      console.log(data);
      $('#contact-form .contact--field').val('');
    }
  });
});
