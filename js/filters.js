import { createThumbnals } from './thumbnail.js';
import { debounce } from './util.js';
import { FILTER, FILTERS_ACTIONS, ACTIVE_BUTTON_CLASS } from './constants.js';

const filterElement = document.querySelector('.img-filters');
const filterFormElement = document.querySelector('.img-filters__form');

let pictures;
let currentFilter = FILTER.default;

const debounceRender = debounce(createThumbnals);

const onFilterChange = ({ target }) => {
  const targetButton = target;
  const activeButton = document.querySelector(`.${ACTIVE_BUTTON_CLASS}`);
  if (!targetButton.matches('button')) {
    return;
  }
  if (activeButton === targetButton) {
    return;
  }
  activeButton.classList.toggle(ACTIVE_BUTTON_CLASS);
  targetButton.classList.toggle(ACTIVE_BUTTON_CLASS);

  currentFilter = targetButton.getAttribute('id');

  applyFilter();
};

function applyFilter() {
  const filteredPictures = FILTERS_ACTIONS[currentFilter](pictures);
  debounceRender(filteredPictures);
}

function configFilter(picturesData) {
  filterElement.classList.remove('img-filters--inactive');
  pictures = [...picturesData];
  filterFormElement.addEventListener('click', onFilterChange);
}

export { configFilter };


