import { openBigPicture } from "./big-picture.js";

const template = document.querySelector('#picture').content.querySelector('.picture');
const pictureContainer = document.querySelector('.pictures');

let localPictures = [];

export const createThumbnals = (pictures) => {
  localPictures = [...pictures];
  const fragment = document.createDocumentFragment();
  pictures.forEach(({ id, url, description, likes, comments }) => {
    const thumb = template.cloneNode(true);
    thumb.dataset.pictureId = id;
    const image = thumb.querySelector('.picture__img');
    image.src = url;
    image.alt = description;
    thumb.querySelector('.picture__likes').textContent = likes;
    thumb.querySelector('.picture__comments').textContent = comments.length;
    fragment.append(thumb);
  });;
  pictureContainer.append(fragment);
};

pictureContainer.addEventListener('click', (evt) => {
  const currentCard = evt.target.closest('.picture');
  if (currentCard) {
    const currentId = Number(currentCard.dataset.pictureId);
    const currentPhoto = localPictures.find((item) => item.id === currentId);
    openBigPicture(currentPhoto);
  }
})




