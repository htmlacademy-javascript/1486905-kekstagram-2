
const picturesNode = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pituresFragment = document.createDocumentFragment();



picturesNode.addEventListener('click', (evt) => {
  const currentPictureNode = evt.target.closest('.picture');

  if (currentPictureNode) {
    openBigPicture(thumb.dataset.pictureID);
  }
});
export { picturesNode };

/*const userModalElement = document.querySelector('.big-picture');
const userModalOpenElement = document.querySelector('.overlay');
const userModalCloseElement = userModalElement.querySelector('.big-picture');

userModalElement.addEventListener('click', () => {
  userModalOpenElement.classList.remove('.hidden');
});

userModalElement.addEventListener('click', () => {
  userModalCloseElement.classList.add('.hidden');
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    userModalOpenElement.classList.add('.hidden');
  }
});

export { userModalOpenElement }*/

