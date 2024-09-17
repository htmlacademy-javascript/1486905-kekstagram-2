function isPalindrome(str) {
  let normalized = str.replaceAll(' ', '').toLowerCase();
  let reversed = '';
  for (let i = normalized.length - 1; i >= 0; i--) {
    reversed += normalized[i]
  }
  return normalized === reversed;
}

console.log(isPalindrome('Лёша на полке клопа нашёл '));


