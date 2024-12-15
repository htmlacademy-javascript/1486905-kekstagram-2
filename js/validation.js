import { DESCRIPTION_LENGTH, NUMBER_OF_HASHTAGS, SPACE, HASH } from './constants.js';

const form = document.querySelector('#upload-select-image');
const hashtags = document.querySelector('.text__hashtags');
const description = document.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const checkDescription = (value) => value.length <= DESCRIPTION_LENGTH;

const getHashs = (value) => value.replaceAll(SPACE, ' ').trim().toLowerCase().split(' ');

const validateCountHashtags = (value) => {
  if (!value.length) {
    return true;
  }
  const hashs = getHashs(value);
  return hashs.length <= NUMBER_OF_HASHTAGS;
};

const checkHashtags = (value) => {
  if (!value.length) {
    return true;
  }
  const hashs = getHashs(value);
  return hashs.every((item) => HASH.test(item));
};

const checkUnique = (value) => {
  if (!value.length) {
    return true;
  }
  const hashs = getHashs(value);
  const uniqs = [...new Set(hashs)];
  return hashs.length === uniqs.length;
};

pristine.addValidator(
  hashtags,
  validateCountHashtags,
  'нельзя указать больше пяти хэштегов'
);

pristine.addValidator(
  hashtags,
  checkHashtags,
  'строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.'
);

pristine.addValidator(
  hashtags,
  checkUnique,
  'хэштеги не должны повторяться'
);

pristine.addValidator(
  description,
  checkDescription,
  'длина сообщения не должна превышать 140 символов'
);

export const isValid = () => pristine.validate();

export const reset = () => pristine.reset();
