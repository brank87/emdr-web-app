const dot = document.getElementById("dot");
const speedSlider = document.getElementById("speed");
const playPauseButton = document.getElementById("play-pause");
const leftAudio = new Audio("left.mp3");
const rightAudio = new Audio("right.mp3");

let animationId;
let isPlaying = false;

playPauseButton.addEventListener("click", function() {
  if (isPlaying) {
    pause();
  } else {
    play();
  }
});

speedSlider.addEventListener("input", function() {
  pause();
  play();
});

function play() {
  isPlaying = true;
  animationId = requestAnimationFrame(moveDot);
  playPauseButton.innerHTML = "Pause";
}

function pause() {
  isPlaying = false;
  cancelAnimationFrame(animationId);
  playPauseButton.innerHTML = "Play";
}

function moveDot() {
  const speed = speedSlider.value;
  const x = dot.offsetLeft + speed;
  const screenWidth = window.innerWidth;

  if (x + dot.offsetWidth > screenWidth) {
    dot.style.left = 0;
    rightAudio.currentTime = 0;
    rightAudio.play();
  } else if (x < 0) {
    dot.style.left = screenWidth - dot.offsetWidth + "px";
    leftAudio.currentTime = 0;
    leftAudio.play();
  } else {
    dot.style.left = x + "px";
  }

  if (isPlaying) {
    animationId = requestAnimationFrame(moveDot);
  }
}
