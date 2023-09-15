const popupEvent = () => {
  const popup = document.querySelector('.popup-container');
  const popupContent = document.querySelectorAll('.popup-content');
  const commentButton = document.querySelectorAll('.comment-btn');

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < commentButton.length; i++) {
    commentButton[i].addEventListener('click', () => {
      popup.classList.remove('dispaly-none');
      popupContent[i].classList.remove('display-none');

      const popupCloseButton = popup.querySelectorAll('.close-popup');
      popupCloseButton[i].addEventListener('click', () => {
        popup.classList.add('display-none');
        popupContent[i].classList.add('display-none');
      });
    });
  }
};

export default popupEvent;
