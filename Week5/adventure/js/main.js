class Game {
    // Tiles
    #tileSize

    // Scale the size of tiles
    #xScale;
    #yScale;

    #screenCoords
    #screenSize

    #mapCoords;
    #mapSize;

    draw(rect) {
        context.fillStyle = "orange";
        rect.draw(context)
    }
}

// Coordinates
class Coords {
    #x;
    #y;
    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    // Returns true if coordinates are the same
    isTouching(that) {
        let compX = this.getX() == that.getX();
        let compY = this.getY() == that.getY();
        return compX && compY;
    }
    // Returns true if coordinates are inside of a rectangle
    isInside(x, y, xSize, ySize) {
        let compX = x <= this.getX() && this.getX() <= x + xSize;
        let compY = y <= this.getY() && this.getY() <= y + ySize;
        return compX && compY;
    }
    // Getters
    getX() { return this.#x; }
    getY() { return this.#y; }

    // Setters
    setX(x) { this.#x = x; }
    setY(y) { this.#y = y; }
    set(x, y) {
         this.setX(x); 
         this.setY(y); 
    }
    // Other mutators
    changeX(n) { this.setX(this.getX() + n); }
    changeY(n) { this.setY(this.getY() + n); }
}
// Rectangle
class Rectangle {
    #origin

    #xSize;
    #ySize;

    constructor(x, y, xSize, ySize) {
        this.#origin = new Coords(x, y);
        this.#xSize = xSize;
        this.#ySize = ySize;
    }
    draw(context) {
        context.fillRect(this.#origin.getX(), this.#origin.getY(), this.#xSize, this.#ySize);
    }
}



// Run Script
const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");

let r = new Rectangle(10, 10, 100, 100);
let game = new Game;
game.draw(r);

