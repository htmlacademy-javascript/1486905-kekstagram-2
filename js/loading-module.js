import { sendData } from './api.js';
import { SubmitButtonText } from './constants.js';

const form = document.querySelector('.img-upload__form');
const closeModal = () => form.reset();
const formSubmitButton = form.querySelector('.img-upload__submit');

const disabledButton = (text) => {
  formSubmitButton.disabled = true;
  formSubmitButton.textContent = text;
};

const enableButton = (text) => {
  formSubmitButton.disabled = false;
  formSubmitButton.textContent = text;
};

export const sendFormData = async (formElement) => {
  const isValid = validate();
  if (isValid) {
    disabledButton(SubmitButtonText.SENDING);
    await sendData(new FormData(formElement));
    enableButton(SubmitButtonText.IDLE);
    closeModal();
  }
};
