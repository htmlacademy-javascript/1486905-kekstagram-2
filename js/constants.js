/*
Для эффекта «Хром» — filter: grayscale(0..1) с шагом 0.1;
Для эффекта «Сепия» — filter: sepia(0..1) с шагом 0.1;
Для эффекта «Марвин» — filter: invert(0..100%) с шагом 1%;
Для эффекта «Фобос» — filter: blur(0..3px) с шагом 0.1px;
Для эффекта «Зной» — filter: brightness(1..3) с шагом 0.1;
Для эффекта «Оригинал» CSS-стили filter удаляются.
*/
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
}
