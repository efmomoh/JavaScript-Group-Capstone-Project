import './style.css';
import './homepage.js';

document.addEventListener('DOMContentLoaded', () => {
  function showPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'block';

    const commentsList = document.getElementById('comments-list');
    commentsList.innerHTML = '';

    const comments = [
      'Comment 1: This show is amazing!',
      'Comment 2: I love the characters in this show.',
    ];

    comments.forEach((comment) => {
      const listItem = document.createElement('li');
      listItem.textContent = comment;
      commentsList.appendChild(listItem);
    });
  }

  function hidePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
  }

  document.addEventListener('click', (event) => {
    if (event.target.matches('.comment-button')) {
      showPopup();
    } else if (event.target.matches('.close-popup')) {
      hidePopup();
    }
  });
});
