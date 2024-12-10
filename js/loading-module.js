import { sendData } from './api.js';

const form = document.querySelector('.img-upload__form');
const closeModal = () => form.reset();
const formSubmitButton = form.querySelector('.img-upload__submit');

const SubmitButtonText = {
  IDLE: 'Сохранить',
  SENDING: 'Сохраняю...',
};

const disabledButton = (text) => {
  formSubmitButton.disabled = true;
  formSubmitButton.textContent = text;
};

const enableButton = (text) => {
  formSubmitButton.disabled = false;
  formSubmitButton.textContent = text;
};

const sendFormData = async (formElement) => {
  const isValid = validate();
  if (isValid) {
    disabledButton(SubmitButtonText.SENDING)
    await sendData(new FormData(formElement));
    enableButton(SubmitButtonText.IDLE);
    closeModal();
  }
};
