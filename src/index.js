import RenderTVShowsItems from './modules/renderTVShowItems.js';
import Homepage from './modules/homepage.js';
import CommentPopup from './modules/popup.js';
import commentEvent from './modules/popupevent.js';
import './style.css';
import { likeEvent, renderLike } from './modules/likes.js';
import pageCount from './modules/pageCounter.js';

const url = 'https://api.tvmaze.com/shows/6/seasons';

const show = new RenderTVShowsItems(url);
show.getData(url);

const view = new Homepage();
const commentPop = new CommentPopup();

// On Page Load
window.onload = () => {
  if (localStorage.getItem('data')) {
    const arr = JSON.parse(localStorage.getItem('data'));
    view.seasonList(arr);
    commentPop.seasonList(arr);
    commentEvent();
    renderLike();
    likeEvent();
    pageCount();
  }
};
