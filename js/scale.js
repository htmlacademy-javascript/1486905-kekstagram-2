import { STEP_SCALE, MAX_SCALE, MIN_SCALE, DEFAULT_SCALE, FACTOR } from './constants.js';

const uploadForm = document.querySelector('.img-upload__form');
const minus = uploadForm.querySelector('.scale__control--smaller');
const plus = uploadForm.querySelector('.scale__control--bigger');
const input = uploadForm.querySelector('.scale__control--value');
const image = uploadForm.querySelector('.img-upload__preview img');

let currentScale = DEFAULT_SCALE;

const render = () => {
  input.value = `${currentScale}%`;
  image.style.transform = `scale(${FACTOR * currentScale})`;
  plus.disabled = currentScale === MAX_SCALE;
  minus.disabled = currentScale === MIN_SCALE;
};

const onPlusClick = () => {
  currentScale = currentScale + STEP_SCALE <= MAX_SCALE ? currentScale + STEP_SCALE : MAX_SCALE;
  render();
};

const onMinusClick = () => {
  currentScale = currentScale - STEP_SCALE >= MIN_SCALE ? currentScale - STEP_SCALE : MIN_SCALE;
  render();
};

plus.addEventListener('click', onPlusClick);
minus.addEventListener('click', onMinusClick);

export const reset = () => {
  currentScale = DEFAULT_SCALE;
  render();
};
