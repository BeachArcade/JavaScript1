class Place {
    #title;
    #img;
    #list;
    #tally = 0;
    // Title, image, array[]
    constructor(... args) {
        this.#title = args[0];
        this.#img = new Image(args[1]);
        this.#list = [];
        for(let i = 2; i < args.length; i++) {
            this.#list.push(args[i]);
        }
        console.log("type: " + typeof args);
        console.log("size: " + args.length);
        console.log("args: " + args);
        console.log("list: " + this.#list);
        console.log("list size: " + this.#list.length);
    }
    // Accessors
    getTitle() { return this.#title; }
    getImg() { return this.#img; }
    getList() { return this.#list; }
    getTally() { return this.#tally; }
    // Mutators
    setTitle(title) { this.#title = title; }
    setImg(img) { this.#img = img; }
    setList(list) { this.#list = list; }
    appendList(item) { this.#list.push(item) }
    setTally(n) { this.#tally = n; }
}
class DestinationViewer {
    // Places
    #places;
    #index;

    // Document items;
    #title;
    #img;
    #list;


    constructor(places) {
        this.#places = places;
        this.#index = 0;

        this.#title = document.querySelector("#placeTitle");
        this.#img = document.querySelector("#placeImg");
        this.#list = document.querySelector("#placeList");

        this.render();
    }
    render() {
        console.log(this.#places[0].getTitle())
        this.#title.innerText = this.#places[this.#index].getTitle();
        this.#img.src = this.#places[this.#index].getImg();
        this.createList();
    }
    createList() {
        this.#places[this.#index].getList().forEach(element => {
            let newItem = document.createElement("li");
            newItem.className = "unchecked";
            newItem.innerHTML = element;

            // Try this outside of this method
            newItem.addEventListener("click", (newItem)=>{
                if(newItem.className == "checked") {
                    console.log("true")
                    newItem.className = "uncheked";
                } else {
                    console.log("false")
                    newItem.className = "checked"
                }
                    
                console.log("List Item: <" + newItem.className + ">" )
            });
            this.#list.appendChild(newItem);
        });
    }
}
console.log("PPPPPPP:" + document.getElementById("placeTitle").innerHTML)
let p = new Place("Bolands", "IMG", "Guiness", "Trivia Night", "Bulmer's", "Vomit in the toilet");
let places = new DestinationViewer([p,p,p]);
