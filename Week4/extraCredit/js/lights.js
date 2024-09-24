console.log(document.querySelector("#lightButton"));

document.querySelector("#lightButton").addEventListener("click", lightButtonHandler);
document.querySelector("#addButton").addEventListener("click", addButtonHandler);

// Creates an x * y  sized grid of lights inside of the lightbox
function makeGrid(xSize, ySize) {
    // Get the lightBox
    const lBox = document.querySelector("#lightBox");

    // Create the grid
    for(let x = 0; x < xSize; x++) {
        for(let y = 0; y < ySize; y++) {
            // Append the light to the grid
            lBox.appendChild(makeLight());
        }
    }
}
// Create light object
function makeLight() {
    // Create the light
    const light = document.createElement("div");
    light.style.backgroundColor = randomColor();
    light.style.border = "6px double " + randomColor();
    light.className = "light";

    return light;
}

// Returns a random rgb value in the form of "rgb(R, G, B);"
function randomColor() {
    let color = "rgb(";

    // Append with random int (0-255) and the commas and parantheses
    for(let i = 0; i < 3; i++) {
        color += Math.floor(Math.random() * 255) + (i != 2 ? ", " : ")");
    }
    return(color);
}

// Handle input from the start button
function lightButtonHandler() {
    if(!document.querySelector("#lightBox").hasChildNodes()) {
        makeGrid(10,10);

        console.log(document.querySelector("#lightBox"));
    } else {
        document.querySelector("#lightBox").remove();
        let newLBox = document.createElement("div");
        newLBox.id = "lightBox";
        document.querySelector("body").appendChild(newLBox);

        makeGrid(10,10);
    }
}
function addButtonHandler() {
    if(document.querySelector("#lightBox").hasChildNodes()) {
        moreLights();

    }
}
    // Add more lights inside of previous lights
 function moreLights() {
    let lBox = document.querySelector("#lightBox");
    lBox.childNodes.forEach(child => {
        let parent = child;
        while(parent.hasChildNodes()) {
            parent = parent.childNodes[0];
        }
        parent.appendChild(makeLight());
    });
 }