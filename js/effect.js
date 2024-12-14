import { EffectsSettings } from './constants.js';

const uploadForm = document.querySelector('.img-upload__form');
const sliderContainer = uploadForm.querySelector('.effect-level__slider');
const effectsList = uploadForm.querySelector('.effects__list');
const effectValue = uploadForm.querySelector('.effect-level__value');
const image = uploadForm.querySelector('.img-upload__preview img');
const sliderBlock = uploadForm.querySelector('.effect-level');

noUiSlider.create(sliderContainer, {
  range: {
    min: 0,
    max: 100,
  },
  format: {
    to: function (value) {
      return parseFloat(value);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
  start: 100,
  connect: 'lower'
});

const render = (value) => {
  const effect = document.querySelector('.effects__radio:checked').value;
  const { style, units } = EffectsSettings[effect];
  image.style.filter = `${style}(${value}${units})`;
};

sliderContainer.noUiSlider.on('update', () => {
  const currentValue = sliderContainer.noUiSlider.get();
  effectValue.value = currentValue;
  render(currentValue);
});

const updateSlider = ({ range, step }) => {
  sliderContainer.noUiSlider.updateOptions({
    range,
    step,
    start: range.max
  });
};

export const reset = () => {
  image.style.filter = '';
  sliderBlock.classList.add('hidden');
};

effectsList.addEventListener('change', ({ target }) => {
  if ((target.value) === 'none') {
    reset();
  } else {
    sliderBlock.classList.remove('hidden');
    updateSlider(EffectsSettings[target.value]);
  }
});

reset();

