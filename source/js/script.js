

const slider = document.querySelector('.slider');
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
      lineAfter.style.float= 'right';
    });

    buttonBefore.addEventListener("click", function(evt) {
      evt.preventDefault();
      catBefore.style.width = 100 + '%';
      catAfter.style.width = 0 + '%';
      lineAfter.style.float= 'left';
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
