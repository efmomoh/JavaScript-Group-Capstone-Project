import './style.css';
import RenderTVShowsItems from './modules/renderTVShowItems.js';
import Homepage from './modules/homepage.js';

const url = 'https://api.tvmaze.com/shows/6/seasons';
const involvementBaseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const addLikesURL = `${involvementBaseURL}apps/ocBz5X2z8Jn2b71IzbDY`;

const show = new RenderTVShowsItems(url, addLikesURL);
show.getData(url, addLikesURL);

const view = new Homepage();

// On Page Load
window.onload = () => {
  if (localStorage.getItem('data')) {
    const arr = JSON.parse(localStorage.getItem('data'));
    view.seasonList(arr);
  }
};
