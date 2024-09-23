let theCanvas;
function init() {
    theCanvas = new gameCanvas();
}
function randomRect(){
    theCanvas.context.fillStyle = `rgb(${rand(0,255)}, ${rand(0,255)}, ${rand(0,255)})`;
    let x = rand(0, 400);
    let y = rand(0, 300);
    theCanvas.context.fillRect(x, y, (x + rand(20, 100)), (y + rand(20, 100)));
}
function rand(min, max) {
    return Math.floor(min + (Math.random() * max));
}
class gameCanvas {
    constructor() {
        // GAME_CANVAS: html canvas
        Object.defineProperty(this, "canvas", {
            value: document.getElementById("gameCanvas"),
            writable: false});

        // CONTEXT: html canvas graphics context
        Object.defineProperty(this, "context", {
            value: this.canvas.getContext("2d"),
            writable: false
        });
    }
}