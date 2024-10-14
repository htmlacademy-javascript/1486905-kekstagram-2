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

export { getRandomInteger, getRandomElement, getUniqueRandom, getCounter };
