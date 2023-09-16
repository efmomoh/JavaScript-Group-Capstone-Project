import './style.css';
import RenderTVShowsItems from './modules/renderTVShowItems.js';
import Homepage from './modules/homepage.js';
import { likeEvent, renderLike } from './modules/likes.js';

const url = 'https://api.tvmaze.com/shows/6/seasons';

const show = new RenderTVShowsItems(url);
show.getData(url);

const view = new Homepage();

// On Page Load
window.onload = () => {
  if (localStorage.getItem('data')) {
    const arr = JSON.parse(localStorage.getItem('data'));
    view.seasonList(arr);
    renderLike();
    likeEvent();
  }
};
