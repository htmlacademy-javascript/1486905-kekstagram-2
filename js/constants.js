export const EFFECTS = {
  NONE: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat'
};
export const EffectsSettings = {
  [EFFECTS.NONE]: {
    range: {
      min: 0,
      max: 1,
    },
    step: 0,
    style: 'none',
    units: ''
  },
  [EFFECTS.CHROME]: {
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
    style: 'grayscale',
    units: ''
  },
  [EFFECTS.SEPIA]: {
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
    style: 'sepia',
    units: ''
  },
  [EFFECTS.MARVIN]: {
    range: {
      min: 0,
      max: 100,
    },
    step: 1,
    style: 'invert',
    units: '%'
  },
  [EFFECTS.PHOBOS]: {
    range: {
      min: 0,
      max: 3,
    },
    step: 0.1,
    style: 'blur',
    units: 'px'
  },
  [EFFECTS.HEAT]: {
    range: {
      min: 1,
      max: 3,
    },
    step: 0.1,
    style: 'brightness',
    units: ''
  },
};

export const POPUPS_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error'
};

export const FILTER = {
  default: 'filter-default',
  random: 'filter-random',
  discussed: 'filter-discussed'
};

export const SORTFUNC = {
  random: () => 0.5 - Math.random(),
  discussed: (a, b) => b.comments.length - a.comments.length
};

export const ACTIVE_BUTTON_CLASS = 'img-filters__button--active';
export const MAX_PICTURES_COUNT = 10;

export const FILTERS_ACTIONS = {
  [FILTER.default]: (photos) => [...photos],
  [FILTER.random]: (photos) => [...photos].toSorted(SORTFUNC.random).slice(0, MAX_PICTURES_COUNT),
  [FILTER.discussed]: (photos) => [...photos].toSorted(SORTFUNC.discussed)
};

export const FILE_TYPES = ['jpg', 'jpeg', 'png', 'gif', 'jfif'];

export const DESCRIPTION_LENGTH = 140;

export const NUMBER_OF_HASHTAGS = 5;

export const DEBOUNCE_DELAY = 500;

export const STEP_SCALE = 25;
export const MAX_SCALE = 100;
export const MIN_SCALE = 25;
export const DEFAULT_SCALE = MAX_SCALE;
export const FACTOR = 0.01;

export const SubmitButtonText = {
  IDLE: 'Сохранить',
  SENDING: 'Сохраняю...',
};

export const COMMENTS_STEP = 5;
