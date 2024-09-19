//Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
//Если в строке нет ни одной цифры, функция должна вернуть NaN:

function integer(string) {
  let result = '';
  string = string.toString();
  for (let i = 0; i <= string.length - 1; i++) {
    if
      (Number.isNan(parseInt(string[i], 10)) === false) {
      result += string[i];
    }
    return result === '' ? NaN : Number(result)
  }
};

