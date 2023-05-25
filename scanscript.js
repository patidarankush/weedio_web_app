  //for scan webpage
  window.addEventListener('load', function() {
    var loadingOverlay = document.getElementById('loading-overlay');
    var mainContent = document.getElementById('main-content');
  
    setTimeout(function() {
      loadingOverlay.style.display = 'none';
      mainContent.classList.remove('hidden');
    }, 3000);
  });



  //scan page JS
  // script.js
// Wrap the event listener in a DOMContentLoaded event handler to ensure the button element is available in the DOM
document.addEventListener("DOMContentLoaded", () => {
    // Get the "Stop Scan" button element
    const stopScanButton = document.getElementById("stop-button");
  
    // Check if the button element exists
    if (stopScanButton) {
      // Add a click event listener to the button
      stopScanButton.addEventListener("click", () => {
        // Perform any necessary actions when the scan is stopped
      });
    }

      // Check if the button element exists
  if (stopScanButton) {
    // Add a click event listener to the button
    stopScanButton.addEventListener("click", () => {
      // Redirect the user to summary.html
      window.location.href = "summary.html";
    });
  }
  });
  
