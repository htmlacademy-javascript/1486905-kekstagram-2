//Функция для проверки длины строки
function stringLength(string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  } else {
    return false;
  }
}

// Строка короче 20 символов
stringLength('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
stringLength('проверяемая строка', 18); // true
// Строка длиннее 10 символов
stringLength('проверяемая строка', 10); // false

