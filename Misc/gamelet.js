const ball = document.getElementById('ball');
document.addEventListener('keydown', handleKeyPress);
let xPosition = 0;
let yPosition = 0;

function handleKeyPress(e) {
  if (e.code === 'ArrowLeft') {
    xPosition = xPosition - 10;
  }
  if (e.code === 'ArrowRight') {
    xPosition = xPosition + 10;
  }
  if (e.code === 'ArrowUp') {
    yPosition = yPosition - 10;
  }
  if (e.code === 'ArrowDown') {
    yPosition = yPosition + 10;
  }
  if (yPosition < 0) {
    yPosition = 0;
  }
  if (xPosition < 0) {
    xPosition = 0;
  }

  refresh();
}
function refresh() {
  ball.style.left = xPosition + 'px';
  ball.style.top = yPosition + 'px';
}