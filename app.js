const ball = document.getElementById("ball");
const speedInput = document.getElementById("speed");
const sizeInput = document.getElementById("size");
const orientationRadios = document.getElementsByName("orientation");

let x = 0;
let y = 0;
let speed = 100;
let size = 50;
let orientation = "horizontal";

for (const radio of orientationRadios) {
  radio.addEventListener("change", (event) => {
    orientation = event.target.value;
  });
}

speedInput.addEventListener("input", (event) => {
  speed = event.target.value;
});

sizeInput.addEventListener("input", (event) => {
  size = event.target.value;
  ball.style.width = size + "px";
  ball.style.height = size + "px";
  ball.style.borderRadius = size / 2 + "px";
});

setInterval(() => {
  if (orientation === "horizontal") {
    x += 10;
    ball.style.left = x + "px";
    if (x >= window.innerWidth - size) {
      x = 0;
    }
  } else if (orientation === "vertical") {
    y += 10;
    ball.style.top = y + "px";
    if (y >= window.innerHeight - size) {
      y = 0;
    }
  }
}, speed);
