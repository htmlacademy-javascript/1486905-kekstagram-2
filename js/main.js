import { photos } from './data.js';
import { createThumbnals } from './thumbnail.js';
import { initUploadModal } from './upload-photo-form.js';
import './scale.js';
import './constants.js';
import './effect.js';

initUploadModal();
createThumbnals(photos)
