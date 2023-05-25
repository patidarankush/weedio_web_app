document.addEventListener("DOMContentLoaded", () => {
    // Get the "Stop Scan" button element
    const stopScanButton = document.getElementById("action-button");
  
    // Check if the button element exists
    if (stopScanButton) {
      // Add a click event listener to the button
      stopScanButton.addEventListener("click", () => {
        // Perform any necessary actions when the scan is stopped
         // Redirect the user to summary.html
      window.location.href = "farmerinput.html";
      });
    }

      // Check if the button element exists
  if (stopScanButton) {
    // Add a click event listener to the button
    stopScanButton.addEventListener("click", () => {
      // Redirect the user to summary.html
      window.location.href = "farmerinput.html";
    });
  }
  });