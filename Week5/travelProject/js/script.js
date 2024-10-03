// The place that is being shown
class Place {
    #title;
    #img;
    #list;
    // Title, image, array[]
    constructor(... args) {
        this.#title = args[0];
        this.#img = args[1];
        this.#list = [];
        for(let i = 2; i < args.length; i++) {
            this.#list.push(args[i]);
        }
    }
    // Accessors
    getTitle() { return this.#title; }
    getImg() { return this.#img; }
    getList() { return this.#list; }
    // getTally() { return this.#tally; }
    // Mutators
    setTitle(title) { this.#title = title; }
    setImg(img) { this.#img = img; }
    setList(list) { this.#list = list; }
    appendList(item) { this.#list.push(item) }
}

// The whole thing where you view the place with the checklist
class DestinationViewer {
    // Places
    #places = [];

    // Document items;
    #title;
    #list;

    // Create the Destination Viewer Object
    constructor(places) {
        if(places == undefined) {
            this.#places = [];
        } else {
            this.#places = places;
        }

        this.#title = document.querySelector("#placeTitle");
        this.#list = document.querySelector("#placeList");

        this.render()
    }
    // Make it show up
    render() {
        // Ensure index does not go out of bounds
        if(index > this.getPlaces().length - 1) {
            index = 0;
        } else if (index < 0) {
            index = this.getPlaces().length - 1;
        }

        // make sure that it is initialized first
        if(this.#places.length > 0) {
            this.#title.innerText = this.#places[index].getTitle();
            this.createList();

            document.querySelector("#placeImg").src = (this.#places[index].getImg())
        }
    }

    // create the HTML elements for the list
    createList() {
        // delete original list
        this.removeList();

        // create a new list
        this.#places[index].getList().forEach(element => {
            let newItem = document.createElement("li");
            newItem.classList.add("checkItem");
            newItem.classList.add("unchecked");
            newItem.innerHTML = element;

            // add event listener to change when clicked
            newItem.addEventListener("click", (newItem)=> {
                const target = newItem.target;
                if(target.classList.contains("checked")) {
                    target.classList.replace("checked", "unchecked");
                } else {
                    target.classList.replace("unchecked", "checked");
                }
                places.updateTally();
               
            });
            // add items to list
            this.#list.appendChild(newItem);
            this.updateTally();
        });
    }

    // change the tally at the bottom when thing to do is complete
    updateTally() {
        let newTally = 0;
        document.querySelector("#placeList").childNodes.forEach(element => {
            if(element.classList != null) {
                if(element.classList.contains("checked")) {
                    newTally++;
                }
                
            }
        });

        // write to document
        const str = newTally + "/" + (document.querySelector("#placeList").childNodes.length);
        document.querySelector("#tally").innerText = str + " completed";
    }

    // Adds an item to the list
    add(item) {
        this.#places.push(item);
    }
    // Returns the list
    getPlaces() {
        return this.#places;
    }
    // Removes all childnodes in the list
    removeList(){
        const list = document.querySelector("#placeList");
        while(list.firstChild) {
            list.removeChild(list.firstChild);
        }
    }
}
// Go to next slide
function next() {
    index++;
    places.render()
}
// Go to next slide but the one before
function prev() {
    index--;
    places.render()
}




// Run script
// create places
let index = 0;
let places = new DestinationViewer();
let unmoduloedIndex = 0;

places.add(new Place("Boland's", "img/bolands2.jpg", "Pint of Guinness", "Trivia Night", "5.50 Bottle of Bulmer's", "Watch the game"));
places.add(new Place("Roebuck", "img/roebuck.jpg", "Order Deliveroo", "Smash Bros", "Tea party", "Listen to loud neighbors", "Performance of classical music on keyboard and chello"));
places.add(new Place("Stillorgan", "img/stillorgan.jpg", "Garden Party", "Look at black mold", "Meet lumpy cat", "Freeze to death", "Inquire about whoever is asleep on the couch", "Try the famous \"Rigatoni Arribiata a la Chan\""));
places.add(new Place("Spar", "img/spar.jpg", "Chicken Fillet Roll", "Buy energy drinks", "Buy Dr. Pepper", "Get caught in the rain", "Tell the cashier the Steelers suck", "Buy candy for someone else", "Get tin foil"));
places.add(new Place("Spice and Rice", "img/spicenrice.jpg", "Chicken Tikka Masala", "Onion Bhajis", "Lamb Vindaloo", "Chili Jalfrezi", "2 for 20 meal deal"));
places.add(new Place("Yumi", "img/yumi.jpg", "Spicebag"));
places.render();

// buttons
document.querySelector("#next").addEventListener("click", next);
document.querySelector("#prev").addEventListener("click", prev);

