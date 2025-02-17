/* Меняем название класса range-slider */
noUiSlider.cssClasses.target += ' castom-range-slider';

const rangeSlider = document.querySelector('.range-slider__slider');
const input0 = document.querySelector('.range-slider__input--from');
const input1 = document.querySelector('.range-slider__input--to');
const inputs = [input0, input1];

noUiSlider.create(rangeSlider, {
  start: [0, 900],
  connect: true,
  step: 1,
  range: {
    'min': 0,
    'max': 900
  },
  cssPrefix: 'noui-',
});

rangeSlider.noUiSlider.on('update', function (values, handle) {
  inputs[handle].value = Math.round(values[handle]);
});
