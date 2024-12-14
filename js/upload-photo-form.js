import { reset as resetEffects } from './effect.js';
import { isValid } from './validation.js';
import { reset as resetScale } from './scale.js';
import { sendData } from './api.js';
import { open as openPopup } from './popup.js';
import { POPUPS_TYPES } from './constants.js';

const uploadForm = document.querySelector('.img-upload__form');
const formSubmitButton = uploadForm.querySelector('.img-upload__submit');
const pageBody = document.querySelector('body');

const uploadFileControl = uploadForm.querySelector('#upload-file');
const photoEditorForm = uploadForm.querySelector('.img-upload__overlay');
const photoEditorResetBtn = photoEditorForm.querySelector('#upload-cancel');

const hashtagInput = uploadForm.querySelector('.text__hashtags');
const commentInput = uploadForm.querySelector('.text__description');

const FILE_TYPES = ['jpg', 'jpeg', 'png', 'gif', 'jfif'];


const onPhotoEditorResetBtnClick = () => {
  closePhotoEditor();
};

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    closePhotoEditor();
  }
}

function closePhotoEditor() {
  photoEditorForm.classList.add('hidden');
  pageBody.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  photoEditorResetBtn.removeEventListener('click', onPhotoEditorResetBtnClick);
  uploadForm.reset();
  resetEffects();
  resetScale();
}
const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Отправляю...',
};

const disableButton = (isDisabled = true) => {
  formSubmitButton.disabled = isDisabled;
  formSubmitButton.textContent = isDisabled ? SubmitButtonText.SENDING : SubmitButtonText.IDLE;
};

uploadForm.addEventListener('submit', async (evt) => {
  evt.preventDefault();
  if (isValid()) {
    try {
      disableButton();
      await sendData(new FormData(uploadForm));
      closePhotoEditor();
      openPopup(POPUPS_TYPES.SUCCESS)

    } catch (error) {
      openPopup(POPUPS_TYPES.ERROR)
    }
    disableButton(false);
  }
})

export const initUploadModal = () => {
  uploadFileControl.addEventListener('change', () => {
    photoEditorForm.classList.remove('hidden');
    pageBody.classList.add('modal-open');
    photoEditorResetBtn.addEventListener('click', onPhotoEditorResetBtnClick);
    document.addEventListener('keydown', onDocumentKeydown);
  });
};

export function onFileInputChange() {
  const file = uploadFileInputElement.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((item) => fileName.endsWith(item));
  if (matches) {
    const url = URL.createObjectURL(file);
    uploadPreview.src = url;
    uploadPreviewEffects.forEach((item) => {
      item.style.backgroundImage = `url(${url})`;
    });
  } else {
    return;
  }
}

