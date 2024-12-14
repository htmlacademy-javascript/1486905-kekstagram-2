const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomElement = (data) => data[getRandomInteger(0, data.length - 1)];

const getUniqueRandom = (a, b) => {
  const uniqueItems = [];
  return () => {
    if (uniqueItems.length > Math.abs(a - b)) {
      return;
    }
    let unique = getRandomInteger(a, b);
    while (uniqueItems.includes(unique)) {
      unique = getRandomInteger(a, b);
    }
    uniqueItems.push(unique);
    return unique;
  }
};

const getCounter = () => {
  let counter = 0;
  return () => {
    counter = counter + 1;
    return counter;
  }
};

const errorLoadDataTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
const body = document.body;
const REMOVE_MESSAGE_TIMEOUT = 5000;

export const showErrorMessage = (message) => {
  const errorArea = errorLoadDataTemplate.cloneNode(true);
  if (message) {
    errorArea.querySelector('.data-error__title').textContent = message;
  }
  body.append(errorArea);

  const errorLoadDataArea = body.querySelector('.data-error');

  setTimeout(() => {
    errorLoadDataArea.remove();
  }, REMOVE_MESSAGE_TIMEOUT);
};
const DEBOUNCE_DELAY = 500;

function debounce(callback, timeoutDelay = DEBOUNCE_DELAY) {
  let timeoutId;
  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(...arguments), timeoutDelayme);
  };
}

export { getRandomInteger, getRandomElement, getUniqueRandom, getCounter, debounce };


