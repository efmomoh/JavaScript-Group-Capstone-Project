// handleLike.js
import handleError from './handleError.js';

const handleLike = async (appId, itemId) => {
  try {
    const response = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ item_id: itemId }),
      },
    );

    if (response.status === 201) {
      const likeCountSpan = document.querySelector(`#like-count-${itemId}`);
      const likeButton = document.querySelector(`#like-button-${itemId}`);
      likeButton.classList.add('like-feedback');
      const currentLikes = parseInt(likeCountSpan.textContent, 10);
      likeCountSpan.textContent = currentLikes + 1;
      likeButton.textContent = 'Liked';
      likeButton.disabled = true;
    } else {
      handleError('Failed to record like.');
    }
  } catch (error) {
    handleError('Error while liking:', error);
  }
};

export default handleLike;