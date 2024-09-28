let map= [
    {
        Scene:"You are standing before the great echo forest.  A small path is in front of you.",
        Pos:0,
        N:1,
        S:-1,
        W:-1,
        E:-1,
        Img:"s0.jpeg",
        Snd:""
    },    {
        Scene:"You walk into the forest and are confronted with a small stream.",
        Pos:1,
        N:-1,
        S:0,
        W:2,
        E:-1,
        Img:"s1.jpeg",
        Snd:""
    },{
        Scene:"Strolling along side the stream.  You notice a bird chirping.",
        Pos:2,
        N:-1,
        S:-1,
        W:-1,
        E:1,
        Img:"s2.jpeg",
        Snd:"birdie.mp3"
    }
]


class Scene {
    #scene;
    #pos;
    #north;
    #south;
    #east;
    #west;
    #img;
    #sound;
    constructor(... args) {
        let i = 0;
        this.#scene = args[i++];
        this.#pos = args[i++];
        this.#north = args[i++];
        this.#south = args[i++];
        this.#east = args[i++];
        this.#west = args[i++];
        this.#img = new Image(args[i++]);
        this.#sound = new Audio(args[i++]);
    }
    toString() {
        let str = "Scene: " + this.#scene + "\n";
        str += "Pos: " + this.#pos + "\n";
        str += "North: " + this.#north + "\n";
        str += "South: " + this.#south + "\n";
        str += "East: " + this.#east + "\n";
        str += "West: " + this.#west + "\n";
        str += "Image Path: " + this.#img + "\n";
        str += "Sound path: " + this.#sound + "\n";

        return str;
    }
    // Getters
    getScene(s) { return this.#scene; }
    getPos(p)   { return this.#pos; }
    getNorth(n) { return this.#north; }
    getSouth(s) { return this.#south; }
    getEast(e)  { return this.#east; }
    getWest(w)  {return  this.#west; }
    getImg(i)   { return this.#img; }
    getSound(s) {return  this.#sound; }
    // Setters
    setScene(s) { this.#scene = s; }
    setPos(p)   { this.#pos = p; }
    setNorth(n) { this.#north = n; }
    setSouth(s) { this.#south = s; }
    setEast(e)  { this.#east = e; }
    setWest(w)  { this.#west = w; }
    setImg(i)   { this.#img = new Image(i); }
    setSound(s) { this.#sound = new Audio(s)}

}

let a = new Scene ("When you walk through the garden...");
console.log(a.toString())

class Map { 
    #scenes = [];
    constructor(... args) {
        console.log("MAP CREATED");
        if(typeof args[i] == typeof [0]) {
            this.#scenes = args;
        } else {
            this.#scenes.push(args);
        }

    }
}
class EventHandler {
    #keyHandler;
    #eventHandler;
    constructor() {
        this.#keyHandler = document.addEventListener("keydown", (event)=> {
            this.handleKey(event)
        })
        // this.#eventHandler = document.addEventListener(Event)
    }
    handleKey(event) {
        console.log("Event: " + event.code);
        switch(event.code) {
            case 'w':
                break;
            case 'a':
                break;
            case 's':
                break;
            case 'd':
                break;
            default:
        }
    }
}
class Entity {
    #name;
    #spriteImg
    #health = 100;
    constructor(name, img){
        console.log(this.#name + ": created")
        this.#name = name;
        this.#spriteImg = img;
    }
    move() {
        console.log(this.#name + ": moved")
    }
}