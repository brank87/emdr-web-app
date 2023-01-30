const dot = document.getElementById("dot");
const container = document.getElementById("container");
const speedInput = document.getElementById("speed");
const leftSound = document.getElementById("left-sound");
const rightSound = document.getElementById("right-sound");

let speed = 5;
let direction = 1;

speedInput.addEventListener("input", (event) => {
  speed = event.target.value;
});

setInterval(() => {
  const left = parseInt(getComputedStyle(dot).left);
  const containerWidth = parseInt(getComputedStyle(container).width);
  const dotWidth = parseInt(getComputedStyle(dot).width);

  if (left + dotWidth >= containerWidth || left <= 0) {
    direction *= -1;
    if (direction === 1) {
      rightSound.currentTime = 0;
      rightSound.play();
    } else {
      leftSound.currentTime = 0;
      leftSound.play();
    }
  }

  dot.style.left = `${left + speed * direction}px`;
}, 50);
