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
  var phone = document.querySelector('form__phone');

  form.addEventListener("submit", function(evt) {
    if (!mail.value) {
      evt.preventDefault();
      mail.classList.add('form__input-text--error');
    }
  });

  form.addEventListener("submit", function(evt) {
    if (!phone.value) {
      evt.preventDefault();
      phone.classList.add('form__input-text--error');
    }
  });

  form.addEventListener("submit", function(evt) {
    if (!weight.value) {
      evt.preventDefault();
      weight.classList.add('form__input-text--error');
    }
  });

  form.addEventListener("submit", function(evt) {
    if (!cat.value) {
      evt.preventDefault();
      cat.classList.add('form__input-text--error');
    }
  });

  form.addEventListener("submit", function(evt) {
    if (!age.value) {
      evt.preventDefault();
      age.classList.add('form__input-text--error');
    }
  });
}

if (slider) {
  const line = slider.querySelector('.slider__line-wrapper');
  const button = slider.querySelector('.slider__button');
  const buttonBefore = slider.querySelector('.slider__before');
  const buttonAfter = slider.querySelector('.slider__after');
  const catBefore = slider.querySelector('.slider__fat-cat');
  const catAfter = slider.querySelector('.slider__thin-cat');
  const lineAfter = slider.querySelector('.slider__line-wrapper');


    buttonAfter.addEventListener("click", function(evt) {
        evt.preventDefault();
        catBefore.style.width = 0 + '%';
        catAfter.style.width = 100 + '%';
        lineAfter.style.float = 'right';
        button.style.left = 100 + '%';
      });

      buttonBefore.addEventListener("click", function(evt) {
        evt.preventDefault();
        catBefore.style.width = 100 + '%';
        catAfter.style.width = 0 + '%';
        lineAfter.style.float= 'left';
        button.style.left = 0 + '%';
      });


      button.addEventListener('mousedown', function (e) {
    e.preventDefault();

    // задаем стартовые координаты касания

    let startCoords = event.clientX;

    // описываем функцию последующего события - движение мышки с нажатой кнопкой

    function onMouseMove(moveE) {
      moveE.preventDefault();

      // записываем в переменную координаты смещения - стартовые координаты минус новые ( при смещении )

      let shift = startCoords - moveE.clientX;

      // перезаписываем данные переменной стартовой координаты

      startCoords = moveE.clientX;

      // длина слайдера - получаем значение в виде числа

      let sliderWidth = parseInt(window.getComputedStyle(line).width, 10);

      // переводим значение смещения кнопки в число

    let buttonVal = parseInt(button.style.left);

      // говорим что свойство left у кнопки будет равным числу смещения. Иначе говоря записываем
      // для кнопки css свойство left и в него значение координат при смещении - кнопка начинает изменять местоположение

      button.style.left = Math.round((button.offsetLeft - shift)/sliderWidth*100) + '%';
      catBefore.style.width = buttonVal  + '%';
      catAfter.style.width = 100 - buttonVal + '%';

      // запрещаем кнопке двигаться за пределы длины слайдера


      if (buttonVal > 100) {
        button.style.left = 100 + '%';
      } else if (buttonVal < 0) {
        button.style.left = 0 + '%';
      }

      // если кнопка находится в первой половине слайдера - меняаем значения первого инпута; если во второй - второго

    //   if (buttonVal < sliderWidth / 2) {
    //     priceMin.value = buttonVal;
    //   } else if (buttonVal > sliderWidth / 2) {
    //     priceMax.value = buttonVal;
    //   }
    }

    // при отмене касания кнопки - перестаем слушать события

    function onMouseUp(upE) {
      upE.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }

    // назначем события - касание и движение

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

  });

}
