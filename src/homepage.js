import renderTVShowItems from './renderTVShowItems.js';
import handleError, { displayError } from './handleError.js';

// Initial rendering
renderTVShowItems();
handleError();
displayError();

document.addEventListener('customErrorEvent', (event) => {
  const { message } = event.detail;

  // Call the custom error display function
  displayError(message);
});
