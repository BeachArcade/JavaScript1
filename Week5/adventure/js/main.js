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
    #x;
    #y;
    #xSize;
    #ySize;

    constructor(x, y, xSize, ySize) {
        this.#x = x;
        this.#y = y;
        this.#xSize = xSize;
        this.#ySize = ySize;
    }
    draw(context) {
        context.fillRect(this.getX(), this.getY(), this.getXSize(), this.getYSize());
    }
    isTouching(that) {
        let thatArr = that.getSides();
    }
    getXSize() { return this.#xSize; }
    getYSize() { return this.#ySize; }
    getX() { return this.#x; }
    getY() { return this.#y; }

    // Returns the specified side or all sides if no params
    getSides(side) {
        let returnVal;
        let left = this.getX();
        let right = this.getX() + this.getXSize();
        let top = this.getY();
        let bottom = this.getY() + this.getYSize();

        switch(side) {
            case "left":
                returnVal = left;
                break;
            case "right":
                returnVal = right;
                break;
            case "top":
                returnVal = top;
                break;
            case "bottom":
                returnVal = bottom;
                break;
            default:
                returnVal = [left, right, top, bottom];
                break
        }
        return returnVal;
    }

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



// Run Script
const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");

let r = new Rectangle(10, 10, 100, 100);
let game = new Game;
game.draw(r);