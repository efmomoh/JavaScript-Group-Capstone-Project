import './homepage.js';

const openCommentsPopup = async (showId) => {
  const commentsPopup = document.getElementById('comments-popup');
  const commentsList = document.getElementById('comments-list');
  commentsList.innerHTML = '';

  try {
    const response = await fetch(`${TVMAZE_BASE_URL}/shows/${showId}/comments`);
    const commentsData = await response.json(); 
  
    commentsData.forEach((comment) => {
      const commentItem = document.createElement('div');
      commentItem.classList.add('comment-item');
      commentItem.textContent = comment.text;
      commentsList.appendChild(commentItem);
    });

    commentsPopup.style.display = 'block';
  } catch (error) {
    // eslint-disable-next-line no-undef
    handleError('Error fetching comments');
  }
};

const closeCommentsPopup = () => {
  const commentsPopup = document.getElementById('comments-popup');
  commentsPopup.style.display = 'none';
};

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('comment-button')) {
    const showId = event.target.getAttribute('data-show-id');
    openCommentsPopup(showId);
  }
});

document.getElementById('close-popup').addEventListener('click', closeCommentsPopup);
