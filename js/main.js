import { createThumbnals } from './thumbnail.js';
import { initUploadModal } from './upload-photo-form.js';
import { getData } from './api.js';
import { showErrorMessage } from './util.js';
import { changeFilter } from './filters.js';

export const bootstrap = async () => {
  try {
    const photos = await getData();
    createThumbnals(photos);
    changeFilter(photos);
  } catch (error) {
    showErrorMessage(error.message);
  }
};

bootstrap();

initUploadModal();
