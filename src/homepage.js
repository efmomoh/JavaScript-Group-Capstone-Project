// Function for handling error messages
const handleError = (errorMessage) => {
  const errorContainer = document.createElement('div');
  errorContainer.classList.add('error-container');

  const errorText = document.createElement('p');
  errorText.classList.add('error-text');
  errorText.textContent = errorMessage;

  errorContainer.appendChild(errorText);

  // variable of how to display and handle errors here
  const itemList = document.querySelector('.item-list');
  itemList.appendChild(errorContainer);
};

// Constants
const TVMAZE_BASE_URL = 'https://api.tvmaze.com';
// Fetch TVMaze data
const fetchTVMazeData = async () => {
  try {
    const response = await fetch(`${TVMAZE_BASE_URL}/shows`);
    const data = await response.json();
    return data;
  } catch (error) {
    handleError('Error fetching TVMaze data');
    return []; // Return an empty array in case of error
  }
};


// Render movie items on the page
const renderMovieItems = async () => {
  const itemList = document.querySelector('.item-list');
  const tvMazeData = await fetchTVMazeData();

  tvMazeData.forEach(async (show) => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('movie-item');

    // Display movie image (show.image.medium contains the URL of the medium-sized image)
    if (show.image && show.image.medium) {
      const image = document.createElement('img');
      image.src = show.image.medium;
      itemDiv.appendChild(image);
    }

    itemDiv.innerHTML += `
        <section class="title-like">
          <h2 class="h1">${show.name}</h2>
          <i class="fa-solid fa-heart"></i>
        </section>
        <button type="submit"class="comment-button" data-show-id="${show.id}">Comments</button>
        `;

    itemList.appendChild(itemDiv);
  });
};
  // Initial rendering
renderMovieItems();

function showPopup(showId) {
  const popup = document.getElementById('popup');

  fetch(`${TVMAZE_BASE_URL}/shows/${showId}`)
    .then((response) => response.json())
    .then((showDetails) => {
      const popupContent = document.querySelector('.popup-content');
      popupContent.innerHTML = `
        <span class="close close-popup" id="closeButton">&times;</span>
        <h2>${showDetails.name}</h2>
        <img src="${showDetails.image?.medium || 'placeholder.jpg'}" alt="${showDetails.name}" />
        <p class="description">${showDetails.summary || 'No description available.'}</p>
        <ul id="comments-list"></ul>
      `;
      popup.style.display = 'block';
    })
    .catch((error) => {
      console.error('Error fetching show details:', error);
    });
}

