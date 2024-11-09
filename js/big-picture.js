const bigPictureTag = document.querySelector('.big-picture');
const closeButtonTag = bigPictureTag.querySelector('#picture-cancel');
const imageTag = bigPictureTag.querySelector('.big-picture__img img');
const captionTag = bigPictureTag.querySelector('.social__caption');
const likesTag = bigPictureTag.querySelector('.likes-count');
const commentsTag = bigPictureTag.querySelector('.social__comment-shown-count');
const commentsNumberTotalTag = bigPictureTag.querySelector('.social__comment-total-count');
const listCommentsTag = bigPictureTag.querySelector('.social__comments');
const socialCommentTag = bigPictureTag.querySelector('.social__comment');
const socialCommentsLoader = bigPictureTag.querySelector('.comments-loader');

const COMMENTS_STEP = 5;
let localComments;
let renderedComments = 0;

const showBigPicture = () => {
  bigPictureTag.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const hideBigPicture = () => {
  bigPictureTag.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const updateStatistic = () => {
  commentsTag.textContent = renderedComments;
};

const renderLoader = () => {
  if (localComments.length) {
    socialCommentsLoader.classList.remove('hidden');
  } else {
    socialCommentsLoader.classList.add('hidden');
  }
}

const renderComments = () => {

  const fragment = document.createDocumentFragment();
  localComments.splice(0, COMMENTS_STEP).forEach((item) => {
    const socialCommentNode = socialCommentTag.cloneNode(true);
    const avatarTag = socialCommentNode.querySelector('.social__picture')
    avatarTag.src = item.avatar;
    avatarTag.alt = item.name;
    socialCommentNode.querySelector('.social__text').textContent = item.message;
    fragment.append(socialCommentNode);
    renderedComments++;
  });

  listCommentsTag.append(fragment);
  updateStatistic();
  renderLoader();
}

const render = (data) => {
  imageTag.src = data.url;
  captionTag.textContent = data.description;
  likesTag.textContent = data.likes;

  commentsNumberTotalTag.textContent = data.comments.length;

  listCommentsTag.innerHTML = '';
  localComments = [...data.comments];
  renderedComments = 0;
  renderComments();
}

export const openBigPicture = (photo) => {
  showBigPicture();
  render(photo)
};

const closeBigPicture = () => {
  hideBigPicture();
};

closeButtonTag.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeBigPicture();
});

socialCommentsLoader.addEventListener('click', () => {
  renderComments();
})
