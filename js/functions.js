//Функция для проверки длины строки
function stringLength(string, maxLength) {
  if (string.length <= maxLength) {
  console.log (true)
  }
}

// Строка короче 20 символов
stringLength('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
stringLength('проверяемая строка', 18); // true
// Строка длиннее 10 символов
stringLength('проверяемая строка', 10); // false

//Функция для проверки, является ли строка палиндромом.
function palindrome(string) {
  let newString = string.replaceAll(' ', '').toLowerCase();
  let emptyString = '';
  for (let i = newString.length - 1; i >= 1; i--) {
    emptyString += newString[i]
  }
  return newString === emptyString;
}

palindrome('Лёша на полке клопа нашёл ');

// Строка является палиндромом
palindrome('топот'); // true
// Несмотря на разный регистр, тоже палиндром
palindrome('ДовОд'); // true
// Это не палиндром
palindrome('Кекс');  // false

//Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
//Если в строке нет ни одной цифры, функция должна вернуть NaN:

function integer(string) {
  let newString = parseInt(string)
  for (let i = newString; i <= 9; i--) {

  }
}
