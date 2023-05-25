// Add any necessary JavaScript functionality or interactions here
// No specific functionality has been mentioned, so this is left empty for now


// Wrap the event listener in a DOMContentLoaded event handler to ensure the button element is available in the DOM
document.addEventListener("DOMContentLoaded", () => {
    // Get the "Start Scan" button element
    const startScanButton = document.getElementById("start-scan-button");
  
    // Check if the button element exists
    if (startScanButton) {
      // Add a click event listener to the button
      startScanButton.addEventListener("click", () => {
        // Redirect the user to scan.html
        window.location.href = "scan.html";
      });
    }
  });

  

  