const openBigPicture = (pictureId) => {
  const currentPhoto = photo.find((photo) => photo.id === Number(pictureId));
  const socialCommentsFragment = document.createDocumentFragment();

  socialCommentsFragment.appendChild(socialCommentNode);

};

export { openBigPicture };
