/*const checkLength = (text, maxLength) => text.length <= maxLength;

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
};*/

// console.log(isPalindrome('Лёша на полке клопа нашёл '));
// Строка короче 20 символов
// console.log(checkLength('проверяемая строка', 20)); // true
// Длина строки ровно 18 символов
// console.log(checkLength('проверяемая строка', 18)); // true
// Строка длиннее 10 символов
// console.log(checkLength('проверяемая строка', 10)); // false

/*console.log(getNumbers('asda007sdlkj'))*/

/*Делу — время
Напишите функцию, которая принимает время начала и конца рабочего дня,
а также время старта и продолжительность встречи в минутах и возвращает true, если встреча не выходит за рамки рабочего дня, и false, если выходит.*/

/*
'8:00' - начало рабочего дня
'17:30' - конец рабочего дня
'14:00' - начало встречи
90 - продолжительность встречи в минутах
*/
/*let startWorkingDay = new Date();
startWorkingDay.setHours(8, 0, 0); // Начало дня.

let finishWorkingDay = new Date();
finishWorkingDay.setHours(17, 30, 0); // Конец дня.

let startMeeting = new Date();
startMeeting.setHours(14, 0, 0); // Начало встречи.

let timeMeeting = new Date();
timeMeeting.setMinutes(0, 90, 0); // продолжительность встречи в минутах

/*если finishWorkingDay - startMeeting <= timeMeeting, то true, иначе false

let time = 'Начало рабочего дня' + ' ' + startWorkingDay +
  'Конец рабочего дня' + ' ' + finishWorkingDay +
  'Начало встречи' + ' ' + startMeeting +
  'продолжительность встречи в минутах' + timeMeeting
console.log(time);*/

let startMeeting = '14:00'; // Начало встречи
let finishWorkingDay = '17:30'; // Конец дня
let timeMeeting = '90' // продолжительность встречи в минутах

/*Находим разницу между концом дням и началом встречи в минутах*/
let getDate = (string) => new Date(0, 0, 0, string.split(':')[0], string.split(':')[1]);
let different = (getDate(finishWorkingDay) - getDate(startMeeting));
let differentRes, hours, minuts;
if (different > 0) {
  differentRes = different;
  hours = Math.floor((differentRes % 86400000) / 3600000);
  minuts = Math.round(((differentRes % 86400000) % 3600000) / 60000);
} else {
  differentRes = Math.abs((getDate(startMeeting) - getDate(finishWorkingDay)));
  hours = Math.floor(24 - (differentRes % 86400000) / 3600000);
  minuts = Math.round(60 - ((differentRes % 86400000) % 3600000) / 60000);
}
let result = (hours * 60) + minuts;
console.log(result);

/*Сраниваем врем встречи в минутах и разницой между концом дням и началом встречи в минутах*/
if (result >= timeMeeting) {
  console.log(true)
}
else {
  console.log(false)
}

