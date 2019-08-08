var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.nav-toggle');

navMain.classList.remove('main-nav--nojs');
navToggle.classList.remove('nav-toggle--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navToggle.classList.remove('nav-toggle--closed');
    navToggle.classList.add('nav-toggle--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navToggle.classList.add('nav-toggle--closed');
    navToggle.classList.remove('nav-toggle--opened');
  }
});
