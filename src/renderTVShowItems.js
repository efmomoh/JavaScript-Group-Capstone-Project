import handleError from './handleError.js';
import handleLike from './handleLike.js';

const renderTVShowItems = async () => {
  const appId = '3hIwDBxWJ2fAXT2ve8Vb';
  const itemList = document.querySelector('.item-list');

  try {
    const response = await fetch('https://api.tvmaze.com/shows');
    if (!response.ok) {
      throw new Error('Failed to fetch TV show data');
    }
    const tvMazeData = await response.json();

    tvMazeData.forEach((show) => {
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('movie-item');

      if (show.image && show.image.medium) {
        const image = document.createElement('img');
        image.src = show.image.medium;
        itemDiv.appendChild(image);
      }

      itemDiv.innerHTML += `
      <section class="title-like">
        <h2>${show.name}</h2>
      <p id="like-button-${show.id}" class="like-button p-heart">🖤</p>
        </section
        <p class="count-likes">Likes: <span id="like-count-${show.id}">0</span></p>
        <button id="comment-button-${show.id}" class="comment-button">Comments</button>
        
      `;

      const likeButton = itemDiv.querySelector(`#like-button-${show.id}`);
      likeButton.classList.add('icon');
      likeButton.addEventListener('click', () => {
        handleLike(appId, show.id);
      });

      itemList.appendChild(itemDiv);
    });
  } catch (error) {
    handleError('Error fetching TV show data:', error);
  }
};

export default renderTVShowItems;
