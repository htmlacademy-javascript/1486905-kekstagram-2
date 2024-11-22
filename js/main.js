import { photos } from './data.js';
import { createThumbnals } from './thumbnail.js';
import { initUploadModal } from './upload-photo-form.js';

initUploadModal();
createThumbnals(photos)
