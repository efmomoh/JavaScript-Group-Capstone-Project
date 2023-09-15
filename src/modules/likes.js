const getLikes = async () => {
  try {
    const response = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ocBz5X2z8Jn2b71IzbDY/likes',
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return [];
  }
};

const postLike = async (itemID) => {
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ocBz5X2z8Jn2b71IzbDY/likes',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item_id: itemID }),
    },
  );
  const data = await response.text();
  return data;
};

const renderLike = async () => {
  const likeCounters = document.querySelectorAll('.likes-counter');
  for (let index = 0; index < likeCounters.length; index += 1) {
    const ind = Number([index]);
    // eslint-disable-next-line no-await-in-loop
    const render = await getLikes();
    const filterRender = render.filter((like) => like.item_id === ind);
    const numberLikes = filterRender[0].likes;
    likeCounters[index].innerHTML = `${numberLikes}`;
  }
};

const likeEvent = () => {
  const likeButtons = document.querySelectorAll('.like-button');
  const likeCounters = document.querySelectorAll('.likes-counter');
  for (let index = 0; index < likeButtons.length; index += 1) {
    likeButtons[index].addEventListener('click', async () => {
      const ind = Number([index]);
      await postLike(ind);
      const likesArr = await getLikes();
      const filterLikes = likesArr.filter((like) => like.item_id === ind);
      const numberLikes = filterLikes[0].likes;
      likeCounters[index].innerHTML = `${numberLikes}`;
    });
  }
};

export {
  getLikes, postLike, renderLike, likeEvent,
};
