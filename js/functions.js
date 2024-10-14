const checkLength = (text, maxLength) => text.length <= maxLength;

const isPalindrome = (str) => {
  let normalized = str.replaceAll(' ', '').toLowerCase();
  let reversed = '';
  for (let i = normalized.length - 1; i >= 0; i--) {
    reversed += normalized[i]
  }
  return normalized === reversed;
};

const getNumbers = (str) => {
  let result = '';
  str = str.toString();
  for (let i = 0; i <= str.length - 1; i++) {
    if (!Number.isNaN(parseInt(str[i], 10))) {
      result += str[i];
    }
  }
  return parseInt(result, 10)
};

// console.log(isPalindrome('Лёша на полке клопа нашёл '));
// Строка короче 20 символов
// console.log(checkLength('проверяемая строка', 20)); // true
// Длина строки ровно 18 символов
// console.log(checkLength('проверяемая строка', 18)); // true
// Строка длиннее 10 символов
// console.log(checkLength('проверяемая строка', 10)); // false

console.log(getNumbers('asda007sdlkj'))

