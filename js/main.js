import { photos } from './data.js';
import { createThumbnals } from './thumbnail.js';
import { initUploadModal } from './upload-photo-form.js';
import './scale.js';
import './constants.js';
import './effect.js';
import { getData, sendData } from './api.js';
import { showErrorMessage } from './util.js';
import './loading-module.js';

/*const bootstrap = async () => {
  const photos = await getData();
  createThumbnals(photos);
};*/

const bootstrap = async () => {
  try {
    const photos = await getData();
    createThumbnals(photos);
  } catch (error) {
    showErrorMessage(error.message);
  }
};

bootstrap();

initUploadModal();

sendFormData();

/*createThumbnals(photos);*/
