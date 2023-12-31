import addComment from './add.js';
import { newComment, storedComments } from './api.js';
import commentCounter from './commentcount.js';
import CommentPopup from './popup.js';

const submitComment = async (e) => {
  e.preventDefault();
  const commList = document.querySelector('.comments-list');
  const name = e.target.name.value;
  const comm = e.target.comm.value;
  const id = e.target.id.value;

  await newComment({ id, name, comm });

  const data = await storedComments(id);
  const dataArr = data.data;
  let html = '';
  dataArr.forEach((item) => {
    html += addComment(item.creation_date, item.username, item.comment);
  });
  commList.innerHTML = html;
  e.target.reset();
  commentCounter(dataArr);
};

const commentEvent = () => {
  const popup = document.querySelector('.comment-popup');
  const commentButtons = document.querySelectorAll('.comment-btn');

  for (let index = 0; index < commentButtons.length; index += 1) {
    commentButtons[index].addEventListener('click', async () => {
      const data = JSON.parse(localStorage.getItem('data'));
      const btnId = commentButtons[index].id;
      const element = data?.find((item) => Number(item.id) === Number(btnId));
      popup.classList.remove('d-none');
      const popUpContents = new CommentPopup();
      await popUpContents.seasonList(element);

      const forms = document.querySelector('.comment-form');

      forms.addEventListener('submit', submitComment);

      const popupCloseButton = popup.querySelector('.popup-close');
      popupCloseButton.addEventListener('click', () => {
        const popUpContents = document.querySelector('.popup-content');
        popup.classList.add('d-none');
        popUpContents.remove();
      });
    });
  }
};

export default commentEvent;