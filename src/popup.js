const openCommentsPopup = async (showId) => {
  const commentsPopup = document.getElementById('comments-popup');
  const commentsList = document.getElementById('comments-list');
  commentsList.innerHTML = '';

  try {
    const response = await fetch(`${TVMAZE_BASE_URL}/shows/${showId}/comments`);
    const commentsData = await response.json(); 

};