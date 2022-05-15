window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.header__burger').addEventListener('click', function() {
    document.querySelector('.header-nav').classList.toggle('header-nav--active'),
    document.querySelector('.header__burger-img').classList.toggle('burger-hide'),
    document.querySelector('.header__burger-close').classList.toggle('burger-hide')
  })
});
