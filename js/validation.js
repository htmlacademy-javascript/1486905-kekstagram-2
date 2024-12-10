const form = document.querySelector('#upload-select-image');
const hashtags = document.querySelector('.text__hashtags');
const description = document.querySelector('.text__description');
const DESCRIPTION_LENGTH = 140;
const NUMBER_OF_HASHTAGS = 5;

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

const space = /\s+/g;
const hash = /^#[a-zA-Zа-яА-ЯЁё0-9]{1,19}$/

const checkDescription = (value) => {
  return value.length <= DESCRIPTION_LENGTH
}

const getHashs = (value) => value.replaceAll(space, ' ').trim().split(' ');

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
  return hashs.every((item) => hash.test(item))
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
)

pristine.addValidator(
  description,
  checkDescription,
  'длина сообщения не должна превышать 140 символов'
);

export const isValid = () => pristine.validate();

