'use strict';

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.nav-toggle');
var slider = document.querySelector('.slider');
var form = document.querySelector('.form__points');

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

if (form) {
  var weight = document.querySelector('.form__weight');
  var age = document.querySelector('.form__age');
  var cat = document.querySelector('.form__name');
  var mail = document.querySelector('.form__email');
  var phone = document.querySelector('.form__phone');

  form.addEventListener("submit", function(evt) {
    if (!mail.value) {
      evt.preventDefault();
      mail.classList.add('form__input-text--error');
    } else {
      mail.classList.remove('form__input-text--error');
    }
  });

  form.addEventListener('submit', function(evt) {
    if (!phone.value) {
      evt.preventDefault();
      phone.classList.add('form__input-text--error');
    } else {
      phone.classList.remove('form__input-text--error');
    }
  });

  form.addEventListener('submit', function(evt) {
    if (!weight.value) {
      evt.preventDefault();
      weight.classList.add('form__input-text--error');
    } else {
      weight.classList.remove('form__input-text--error');
    }
  });

  form.addEventListener('submit', function(evt) {
    if (!cat.value) {
      evt.preventDefault();
      cat.classList.add('form__input-text--error');
    } else {
      cat.classList.remove('form__input-text--error');
    }
  });

  form.addEventListener('submit', function(evt) {
    if (!age.value) {
      evt.preventDefault();
      age.classList.add('form__input-text--error');
    } else {
      age.classList.remove('form__input-text--error');
    }
  });
}

if (slider) {
  const button = slider.querySelector('.slider__button');
  const buttonBefore = slider.querySelector('.slider__before');
  const buttonAfter = slider.querySelector('.slider__after');
  const catBefore = slider.querySelector('.slider__fat-cat');
  const catAfter = slider.querySelector('.slider__thin-cat');
  const lineAfter = slider.querySelector('.slider__line-wrapper');

  buttonAfter.addEventListener('click', function(evt) {
    evt.preventDefault();
    catBefore.style.width = 0 + '%';
    catAfter.style.width = 100 + '%';
    lineAfter.style.float = 'right';
    button.style.left = 100 + '%';
  });

  buttonBefore.addEventListener('click', function(evt) {
    evt.preventDefault();
    catBefore.style.width = 100 + '%';
    catAfter.style.width = 0 + '%';
    lineAfter.style.float = 'left';
    button.style.left = 0 + '%';
  });
}
