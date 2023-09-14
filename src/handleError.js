// handleError.js
// handleError.js

// Custom function to display errors
export const displayError = (message) => {
  // You can customize how you want to display the error to the user here.
  // For example, you can append it to a designated error container in your HTML.
  const errorContainer = document.querySelector('#error-container');
  if (errorContainer) {
    const errorDiv = document.createElement('div');
    errorDiv.classList.add('error-message');
    errorDiv.textContent = `Error: ${message}`;
    errorContainer.appendChild(errorDiv);
  }
};

// Custom function to handle errors
const handleError = (message) => {
  displayError(message);
};

// Example Usage:
// handleError('Something went wrong');

export default handleError;