
import { uniquePhoto } from './data.js';

const template = document.querySelector('#picture').content.querySelector('.picture');

const photo = `photos/${uniquePhoto()}.jpg`;
const image = template.querySelector('.picture__img');

image.src = photo.url;
image.alt = photo.description;

template.querySelector('.picture__comments').textContent = photo.comments;
template.querySelector('.picture__likes').textContent = photo.likes;

const container = document.querySelector('.pictures');
container.appendChild(template);
