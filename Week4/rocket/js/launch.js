const timer = ["LIFT OFF!", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE", "TEN", "ELEVEN", "TWELVE", "THIRTEEN"];
let button = document.querySelector("#launchReset");
button.addEventListener("click", handleButton);

let r = {
    count: timer.length - 1,
    interval: null,
    ship: document.querySelector("#ship"),
    pos: 0
}
function countdown() {
    r.interval = setInterval(counting, 1000);
}
function counting() {
    let countDown = document.querySelector("#countDown");
    
    if(r.count >= 0) {
        countDown.innerText = timer[r.count--];    
    } else {
        setTimeout( ()=> {
            r.ship.style.display = "none";
        }, 2000);
        startLiftoff();
        clearInterval(r.interval);
    }
}
function startLiftoff() {
    let land = document.querySelector('.land');
    let sound = new Audio("sounds/launch.mp3");

    sound.play();

    // pre launch
    r.ship.classList.remove("rocket");
    r.ship.classList.add("rocket");
    land.classList.add("quake");

    let luck = Math.random() * 11;
    console.log(luck)
    // if ship doesnt explode
    if(luck < 0) {
        r.ship.classList.add("launch");
        localStorage.setItem("launch", `Captain's Log: Star-Date ${new Date().toString()},\nSuccessful launch!`);
    } else {
        r.ship.classList.remove("rocket");
        let explosion = document.createElement("img");
        explosion.src = "../img/explosion.gif";
        explosion.id = "explosion";

        r.ship.appendChild(explosion);

        localStorage.setItem("launch", `Captain's Log: Star-Date ${new Date().toString()},\nUnsuccessful launch!`);

    }


    
    console.log(localStorage.getItem("launch"));
}

// local storage setItem getItem
console.log(localStorage.getItem("launch") ?? "Awaiting lift off.");

function handleButton() {
    console.log("ASDFASFSDAFSDAFSAD");
    // launch
    if(button.innerText == "Launch") {
        countdown();
        button.innerText = "Reset"

    } else if(button.innerText == "Reset") {
        reset();
        button.innerText = "Launch"
    }
}

function reset() {
    console.log("reseting")
    r.ship.remove();
    let newShip = document.createElement("div");
    newShip.className = "rocket";
    newShip.id = "ship";

    document.querySelector("body").appendChild(newShip);
    r = {
        count: timer.length - 1,
        interval: null,
        ship: document.querySelector("#ship"),
        pos: 0
    }
    r.ship.style.display = "block";

}