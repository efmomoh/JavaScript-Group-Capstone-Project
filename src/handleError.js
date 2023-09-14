// handleError.js
// Custom function to display errors
export const displayError = (message) => {
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