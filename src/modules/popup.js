class CommentPopup {
    seasonList = (arr) => {
      const commentPopup = document.querySelector('.comment-popup');
      arr.forEach((element) => {
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
            <h3 id="comment-count" class="center">Comments (2)</h3>
            <ul class="comments">
                <li class="comment-item">09/12/2023 Obote: I really enjoyed the 3 season</li>
                <li class="comment-item">09/12/2023 Momoh: I love the art works</li>
            </ul>
            `;
        commentPopup.append(div);
      });
    }
}

export default CommentPopup;