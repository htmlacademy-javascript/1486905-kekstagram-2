/*id, число — идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться.*/
const ID = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
];

/*url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.*/
const URL = [
  'photos/{{1}}.jpg',
  'photos/{{2}}.jpg',
  'photos/{{3}}.jpg',
  'photos/{{4}}.jpg',
  'photos/{{5}}.jpg',
  'photos/{{6}}.jpg',
  'photos/{{7}}.jpg',
  'photos/{{8}}.jpg',
  'photos/{{9}}.jpg',
  'photos/{{10}}.jpg',
  'photos/{{11}}.jpg',
  'photos/{{12}}.jpg',
  'photos/{{13}}.jpg',
  'photos/{{14}}.jpg',
  'photos/{{15}}.jpg',
  'photos/{{16}}.jpg',
  'photos/{{17}}.jpg',
  'photos/{{18}}.jpg',
  'photos/{{19}}.jpg',
  'photos/{{20}}.jpg',
  'photos/{{21}}.jpg',
  'photos/{{22}}.jpg',
  'photos/{{23}}.jpg',
  'photos/{{24}}.jpg',
  'photos/{{25}}.jpg',
];

/*description, строка — описание фотографии. Описание придумайте самостоятельно.*/
const DESCRIPTION = [
  'Горячая пора!',
  'Прекрасно!',
  'Круто!',
  'Зацените!',
  'Огонь!',
  'Замечательно!',
  'Вот это да!',
  'Прикол!',
];

/*likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.*/
const LIKES = [
  '15',
  '20',
  '100',
  '120',
  '200',
];

/*Поле avatar — это строка, значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg. Аватарки подготовлены в директории img.*/
const AVATAR = [
  'img/avatar-{{1}}.svg',
  'img/avatar-{{2}}.svg',
  'img/avatar-{{3}}.svg',
  'img/avatar-{{4}}.svg',
  'img/avatar-{{5}}.svg',
  'img/avatar-{{6}}.svg',
];

/*Для формирования текста комментария — message — вам необходимо взять одно или два случайных предложения из представленных ниже:*/
const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

/*Имена авторов также должны быть случайными. Набор имён для комментаторов составьте сами. Подставляйте случайное имя в поле name.*/
const NAMES = [
  'Джек',
  'Илон',
  'Марк',
  'Макс',
  'Джеймс',
  'Петр',
];

/*В файле main.js напишите необходимые функции для создания массива из 25 сгенерированных объектов. Каждый объект массива — описание фотографии, опубликованной пользователем.*/
const SIMILAR_OBJECTS_COUNT = 25;


const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createObjects = () => {
  const randomUrlIndex = getRandomInteger(0, URL.length - 1);
  const randomDescriptionIndex = getRandomInteger(0, DESCRIPTION.length - 1);
  const randomLikesIndex = getRandomInteger(0, LIKES.length - 1);
  const randomIdIndex = getRandomInteger(0, ID.length - 1);
  const randomAvatarIndex = getRandomInteger(0, AVATAR.length - 1);
  const randomMessageIndex = getRandomInteger(0, MESSAGE.length - 1);
  const randomNameIndex = getRandomInteger(0, NAMES.length - 1);

  return {
    url: URL[randomUrlIndex],
    description: DESCRIPTION[randomDescriptionIndex],
    likes: LIKES[randomLikesIndex],
    id: ID[randomIdIndex],
    avatar: AVATAR[randomAvatarIndex],
    message: MESSAGE[randomMessageIndex],
    name: NAMES[randomNameIndex],
  };
};

const similarObjects = Array.from({ length: SIMILAR_OBJECTS_COUNT }, createObjects);

console.log(similarObjects);
