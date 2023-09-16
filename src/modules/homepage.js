class Homepage {
  seasonList = (arr) => {
    const viewBox = document.querySelector('#view-box');
    arr.forEach((element) => {
      const div = document.createElement('div');
      div.innerHTML = `
      <div class="season-card">
      <img src="${element.image.medium}" alt="season image" class="card-image">
      <div class="season-details">
        <h4 class="season-title">Season ${element.number}</h4>
        <p class="likes">
        <span class="likes-counter">0</span> likes <button class="like-button"><i class="fa-regular fa-heart"></i></button>
        </p>
      </div>
      <button type="button" id="${element.id}" class="comments btn-primary comment-btn">Comment</button>
    </div>
    `;
      viewBox.append(div);
    });
  };
}

export default Homepage;
