const form = document.querySelector('#upload-select-image');
const hashtags = document.querySelector('.text__hashtags')
const description = document.querySelector('.text__description')

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

const space = /\s+/g;
const hash = /^#[a-zA-Zа-яА-ЯЁё]{1,19}$/

const checkDescription = (value) => {
  return value.length <= 10
}

const getHashs = (value) => value.replaceAll(space, ' ').trim().split(' ');

const validateCountHashtags = (value) => {
  if (!value.length) {
    return true;
  }
  const hashs = getHashs(value);
  console.log(hashs)
  return hashs.length <= 5;
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
  '###'
);

pristine.addValidator(
  hashtags,
  checkUnique,
  'Хештеги не должны повторяться'
)

pristine.addValidator(
  description,
  checkDescription,
  'Длина сообщения не должна превышать 10'
);

export const isValid = () => pristine.validate();

export const isValid = () => pristine.validate();
