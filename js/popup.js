import { POPUPS_TYPES } from './constants.js';

const body = document.body;
const succesTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const templates = {
  [POPUPS_TYPES.SUCCESS]: succesTemplate,
  [POPUPS_TYPES.ERROR]: errorTemplate
};

export const open = (type) => {
  const newPopup = templates[type].cloneNode(true);
  newPopup.addEventListener('click', ({ target }) => {
    if (target.classList.contains(type) || target.classList.contains(`${type}__button`)) {
      newPopup.remove()
    }
  });

  body.append(newPopup);
}
