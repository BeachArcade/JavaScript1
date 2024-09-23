let xPosition = 0;
let yPosition = 0;
let xBound = 400;
let yBound = 300;

let bgColor = "00000ff";

let timer;

const ball = document.getElementById('ball');

document.addEventListener('keydown', handleKeyPress);

// Audio Controls
document.querySelector("#playButton").addEventListener("click", ()=> {
  let song = document.querySelector("audio");
  let button = document.querySelector("#playButton");

  if(button.innerHTML == "Play") {
    song.play();
    button.innerHTML = "Pause";

    timer = setInterval(changeBackground, 100);
  } else {
    song.pause();
    button.innerHTML = "Play";

    clearInterval(timer);
    document.querySelector("body").style.backgroundColor = "#FFFFFF"
  }
});

// Change the background
function changeBackground() { 
  let body = document.querySelector("body");
  let a = (parseInt(bgColor, 16) + 1) % (256*256*256);
  bgColor = a.toString(16);
  body.style.backgroundColor = "#"  + bgColor;
}

// Move the ball
function handleKeyPress(e) {
  findBounds();
  printCode(e.code);
  if (e.code === 'ArrowLeft') {
    xPosition = xPosition - 20;
  }
  if (e.code === 'ArrowRight') {
    xPosition = xPosition + 20;
  }
  if (e.code === 'ArrowUp') {
    yPosition = yPosition - 20;
  }
  if (e.code === 'ArrowDown') {
    yPosition = yPosition + 20;
  }
  if (yPosition < 0) {
    yPosition = 0;
  } else if(yPosition + 51 > yBound) {
    yPosition = yBound - 50;
  }
  if (xPosition < 0) {
    xPosition = 0;
  } else if(xPosition + 51 > xBound) {
    xPosition = xBound - 50;
  }
  refresh();
}

//update ball on screen
function refresh() {
  ball.style.left = xPosition + 'px';
  ball.style.top = yPosition + 'px';

  findBounds();
}

//find window size for the window
function findBounds() {
  xBound = window.innerWidth;
  yBound = window.innerHeight;

  let michael = document.querySelector("#michael")
  let michaelRect = michael.getBoundingClientRect();
  if(
    michaelRect.top < yPosition + 50 &&
    michaelRect.bottom > yPosition &&
    michaelRect.left < xPosition + 50 &&
    michaelRect.right> xPosition ) {
      michael.src = "img/michael2.png";
  } else {
    michael.src = "img/michael.png";
  }
}
function printCode(code) {
  if(code.startsWith("Arrow")) {
    console.log(code);
  }
}