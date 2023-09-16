const commentEvent = () => {
  const popup = document.querySelector('.comment-popup');
  const popupContents = document.querySelectorAll('.popup-content');
  const commentButtons = document.querySelectorAll('.btn-primary');

  for (let index = 0; index < commentButtons.length; index += 1) {
    commentButtons[index].addEventListener('click', (event) => {
      event.preventDefault();
      popup.classList.remove('d-none');
      popupContents[index].classList.remove('d-none');

      const popupCloseButtons = popup.querySelectorAll('.popup-close');
      popupCloseButtons[index].addEventListener('click', () => {
        popup.classList.add('d-none');
        popupContents[index].classList.add('d-none');
      });
    });
  }
};

export default commentEvent;