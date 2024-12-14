import { createThumbnals } from './thumbnail.js';
import { initUploadModal } from './upload-photo-form.js';
import { getData } from './api.js';
import { showErrorMessage } from './util.js';
import { configFilter } from './filters.js';

export const bootstrap = async () => {
  try {
    const photos = await getData();
    createThumbnals(photos);
    configFilter(photos);
  } catch (error) {
    showErrorMessage(error.message);
  }
};

bootstrap();

initUploadModal();
