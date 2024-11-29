import { EffectsSettings } from "./constants.js";
const uploadForm = document.querySelector('.img-upload__form');
const sliderContainer = uploadForm.querySelector('.effect-level__slider');
const effectsList = uploadForm.querySelector('.effects__list');
const effectValue = uploadForm.querySelector('.effect-level__value');
const image = uploadForm.querySelector('.img-upload__preview img');

noUiSlider.create(sliderContainer, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  connect: 'lower'
});

const render = (value) => {
  const effect = document.querySelector('.effects__radio:checked').value;
  const { style, units } = EffectsSettings[effect];
  image.style.filter = `${style}(${value}${units})`
}

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
}

effectsList.addEventListener('change', ({ target }) => {
  console.log(target.value)
  updateSlider(EffectsSettings[target.value])
  if
    ((target.value) == none) {
    image.removeAttribute("style");
  }
});


