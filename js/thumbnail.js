const template = document.querySelector('#picture').content.querySelector('.picture');
const pictureContainer = document.querySelector('.pictures');

export const createThumbnals = (pictures) => {
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



