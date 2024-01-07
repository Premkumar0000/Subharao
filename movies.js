var videoElement = document.getElementById("f");

// Check if the Full Screen API is supported
if (videoElement.requestFullscreen) {
  videoElement.requestFullscreen();
} else if (videoElement.mozRequestFullScreen) { // Firefox
  videoElement.mozRequestFullScreen();
} else if (videoElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
  videoElement.webkitRequestFullscreen();
} else if (videoElement.msRequestFullscreen) { // IE/Edge
  videoElement.msRequestFullscreen();
}
document.getElementById("f").addEventListener("dblclick", function() {
  this.currentTime += 10;
});