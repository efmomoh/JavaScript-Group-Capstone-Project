class PopUp {
    seasonList = (movie) => {
      const popupContainer = document.querySelector('.popup-container');
      movie.forEach((element) => {
        const div = document.createElement('div');
        div.classList.add('popup-content', 'd-none');
        div.innerHTML = `
            <div class="popup-header">
                <img src="${element.image.original}" alt="season ${element.number}" class="popup-image">
                <i class="fa-regular fa-circle-xmark popup-close"></i>
            </div>
            <h2 class="popup-title center">Season ${element.number}</h2>
            <div class="synopsis">
                <p>Premier Date: ${element.premiereDate}</p>
                <p class="second-element end">End Date: ${element.endDate}</p>
            </div>
            <div class="synopsis">
                <p>Episodes: ${element.episodeOrder}</p>
                <p class="second-element">Channel Network: ${element.network.name}</p>
            </div>
            `;
        popupContainer.append(div);
      });
    }
}

export default PopUp;