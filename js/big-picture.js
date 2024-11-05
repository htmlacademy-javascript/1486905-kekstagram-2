import { commentsTotal, commentsNumber } from './data.js';

const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('#picture-cancel');
const image = bigPicture.querySelector('.big-picture__img img');
const caption = bigPicture.querySelector('.social__caption');
const likes = bigPicture.querySelector('.likes-count');
const comments = bigPicture.querySelector('.social__comment-shown-count');
const commentsNumberTotal = bigPicture.querySelector('.social__comment-total-count');
const listComments = bigPicture.querySelector('.social__comments');
const socialComment = bigPicture.querySelector('.social__comment');

const showBigPicture = () => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const hideBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const render = (data) => {
  image.src = data.url;
  caption.textContent = data.description;
  likes.textContent = data.likes;
  comments.textContent = commentsNumber;
  commentsNumberTotal.textContent = commentsTotal;
}

export const openBigPicture = (photo) => {
  showBigPicture();
  render(photo)
};

const closeBigPicture = () => {
  hideBigPicture();
};

closeButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeBigPicture();
});

const pi = (data) => {
  const socialCommentNode = socialComment.cloneNode(true);
  socialCommentNode.querySelector('.social__picture').src = data.avatar;

  socialCommentFragment.appendChild(socialCommentNode);
};
