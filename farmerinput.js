const form = document.getElementById('farmer-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Handle form submission logic here
  
  // Example: Fetch data and show success message
  fetch('/submit-farmer-data', {
    method: 'POST',
    body: new FormData(form)
  })
  .then(response => response.json())
  .then(data => {
    // Show success message or redirect to next page
    alert('Form submitted successfully!');
  })
  .catch(error => {
    // Handle error
    console.error('Error:', error);
    alert('An error occurred. Please try again later.');
  });
});



document.addEventListener("DOMContentLoaded", () => {
    // Get the "Stop Scan" button element
    const stopScanButton = document.getElementById("action-button");
  
    // Check if the button element exists
    if (stopScanButton) {
      // Add a click event listener to the button
      stopScanButton.addEventListener("click", () => {
        // Perform any necessary actions when the scan is stopped
         // Redirect the user to summary.html
      window.location.href = "suggestion.html";
      });
    }

      // Check if the button element exists
  if (stopScanButton) {
    // Add a click event listener to the button
    stopScanButton.addEventListener("click", () => {
      // Redirect the user to summary.html
      window.location.href = "suggestion.html";
    });
  }
  });