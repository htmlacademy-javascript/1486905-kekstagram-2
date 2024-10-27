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

/*const getTimePoint = (timeString) => {
  const [hour, min] = timeString.split(':');
  return parseInt(hour, 10) * 60 + parseInt(min, 10)
}

const checkTime = (startDay, endDay, startMeeting, lengthMeeting) => {
  const startDayPoint = getTimePoint(startDay)
  const endDayPoint = getTimePoint(endDay)
  const startMeetingPoint = getTimePoint(startMeeting)
  const endMeetingPoint = startMeetingPoint + lengthMeeting
  return (startMeetingPoint >= startDayPoint && startMeetingPoint <= endDayPoint) && (endMeetingPoint >= startDayPoint && endMeetingPoint <= endDayPoint)
}
console.log(checkTime('08:00', '17:30', '14:00', 90))*/

/*Определение номера этажа и подъезда местонахождения квартиры*/
/*findEntranceAndFloor = function () {
  let apartmentsOnFloor = 3, numberFloorsHouse = 12, apartmentNumber = 15;
  let n1, n2, n3, n4;
  apartmentsInEntrance = numberFloorsHouse * apartmentsOnFloor;//сколько квартир в подъезде

  n4 = apartmentNumber % apartmentsInEntrance;
  n2 = (apartmentNumber - n4) / apartmentsInEntrance;
  n1 = n4 == 0 ? n2 : n2 + 1;//в каком подъезде эта квартира

  n3 = (((apartmentNumber - 1 - ((apartmentNumber - 1) % apartmentsOnFloor)) / apartmentsOnFloor) % numberFloorsHouse) + 1;//на каком этаже эта квартира
  console.log('Номер подъезда:\n' + n1 + '\nЭтаж на котором находится квартира:\n' + n3);
};

findEntranceAndFloor()*/

/*1. Узор «Квадратная звезда» в Javascript*/

/*let n = 5;//количество строк или столбцов
let string = "";//определение пустой строки

for (let i = 0; i < n; i++) { //внешний контур
  for (let j = 0; j < n; j++) { //внутренний контур
    string += "*";
  }
  //новая строка после каждой строки
  string += "\n";
}

console.log(string);*/
/*. Узор с полыми квадратами*/
/*let n = 5;
let string = "";

for (let i = 0; i < n; i++) { // external loop
  for (let j = 0; j < n; j++) { // internal loop
    if (i === 0 || i === n - 1) {
      string += "*";
    }
    else {
      if (j === 0 || j === n - 1) {
        string += "*";
      }
      else {
        string += " ";
      }
    }
  }
  // newline after each row
  string += "\n";
}
// printing the string
console.log(string);*/

/*3. Шаблон прямоугольного треугольника в Javascript*/

/*let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 0; j < n - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);*/

/*4. Паттерн «Левый треугольник» в Javascript
let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);*/
/*5. Паттерн «Звезда с нисходящим треугольником»
let n = 5;
let string = "";
for (let i = 0; i < n; i++) {
  // printing star
  for (let k = 0; k < n - i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);*/



