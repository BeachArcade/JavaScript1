const SPRITE_X_SIZE = 32;
const SPRITE_Y_SIZE = 32;
const SPRITESHEET = "img/sprites.png";
class Sprite {
    // location of where the sprite is

    #origX = 0;
    #origY = 0;
    #xOffset = 16;
    #yOffset = 0;
    #object;
    constructor(name) {
        let object = document.createElement("div");
        object.classList.add("sprite");
        object.id = name;

        console.log(document.querySelector("#field"));
        document.querySelector("#field").appendChild(object);

        this.#object = object;

        this.draw()
    }
    animate(animatation) {

    }
    draw(){
        this.#object.style.backgroundPosition = `${this.#xOffset}px ${this.#yOffset}px`;
        console.log(`X: ${this.#xOffset}\t Y: ${this.#yOffset}`);
        console.log(this.#object.style.backgroundPosition)
    }
    change(dir) {
        let x = 0;
        let y = 0;
        switch(dir) {
            case "up":
                y = -1 * SPRITE_Y_SIZE;
                break;
            case "down":
                y = SPRITE_Y_SIZE;
                break;
            case "left":
                x = -1 * SPRITE_X_SIZE;
                break;
            case "right":
                x  = SPRITE_X_SIZE;
                break;
            default:
                console.log("SOMETHING BROKE");
        }
        this.#xOffset += x;
        this.#yOffset += y;

        this.draw();
    }
}
class Animation {
    #frames;
    // Send in an array of frames or a 2d array of the offsets for the sprite image 
    constructor(frames) {
        this.#frames = frames;
    }
}


let sprite = new Sprite("Batter");

document.querySelector("#up").addEventListener("click", ()=>{ move('up') });
document.querySelector("#down").addEventListener("click", ()=>{ move('down') });
document.querySelector("#left").addEventListener("click", ()=>{ move('left') });
document.querySelector("#right").addEventListener("click", ()=>{ move('right') });


function move(dir) {
    sprite.change(dir)
}