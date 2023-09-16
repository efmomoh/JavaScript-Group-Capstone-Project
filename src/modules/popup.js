import { storedComments } from './api.js';

class CommentPopup {
    getComments = async (id) => {
      const { data } = await storedComments(id);

      return Array.isArray(data) ? data : [];
    }

    seasonList = async (element) => {
      const commentPopup = document.querySelector('.comment-popup');
      const div = document.createElement('div');
      div.classList.add('popup-content');
      const data = await this.getComments(element.id);
      const comments = data.map((item) => `<li>${item.creation_date} ${item.username}: ${item.comment}</li>`).join(' ');
      div.innerHTML = `
            <div class="popup-header">
                <img src="${element.image.original}" alt="season ${element.number}" class="popup-image">
                <div class="popup-close">
                    <i class="fa-regular fa-circle-xmark"></i>
                </div>
            </div>
            <h2 class="popup-title center margin-b">Season ${element.number}</h2>
            <div class="synopsis margin-b">
                <p>Premier Date: ${element.premiereDate}</p>
                <p class="second-element end">End Date: ${element.endDate}</p>
            </div>
            <div class="synopsis margin-b">
                <p>Episodes: ${element.episodeOrder}</p>
                <p class="second-element">Channel Network: ${element.network.name}</p>
            </div>
            <div class="comment-items">
            <h3 id="comment-count" class="center comment-count margin-b">Comments(3)</h3>
            <ul class="comments-list margin-b">
                ${comments}
            </ul>

            <h3 class="center margin-b">Add a comment</h3>
            <form class="comment-form">
                <input type="hidden" name="id" id="element-id" value="${element.id}" />
                <input type="text" id="name" name="name" class="name-input comment-name input-style" placeholder="Your name">
                <textarea type="text" id="text" name="comm" class="text-input input-style" placeholder="Your comment"></textarea>
                <button type="submit" id="comment-btn" class="comment-input-btn btn-primary">Comment</button>
            </form>
            </div>

            `;
      commentPopup.append(div);
    }
}

export default CommentPopup;