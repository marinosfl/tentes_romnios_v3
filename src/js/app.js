const burger = document.querySelector('.burger');
const navbarMobile = document.querySelector('.navbar');

burger.addEventListener('click', e => {
  burger.classList.toggle('active');
  navbarMobile.classList.toggle('active');
});
