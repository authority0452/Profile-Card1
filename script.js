// Display current time in milliseconds
function updateCurrentTime() {
  const timeEl = document.getElementById("user-time");
  if (timeEl) {
    timeEl.textContent = Date.now();
  }
}

// Initial render
updateCurrentTime();

// Optional: update every second
setInterval(updateCurrentTime, 1000);
