class RoutineList {
    #list = [];
    constructor(routines) {
        // set list
        if(typeof routines == typeof "") {
            this.#list.push(new Routine(routines))
        } else {
            routines.forEach((item) => {
                this.#list.push(new Routine(item));
            });
        }
    }
    addTo(){
        let listElem = document.querySelector("#routineList");
        console.log("LIST: " + listElem)
        this.#list.forEach((item)=> {
            listElem.appendChild(item.get());
        })
    }

}
class Routine {
    #domObj;
    #routineName;
    constructor(item) {
        if(typeof item == typeof "") {
            this.#routineName = item; 
        } else {
            return;
        }
        this.#domObj = document.createElement("li");
        this.#domObj.classList += "routineListItem";
        this.#domObj.innerText = this.#routineName;
    }
    getName() {
        return this.#routineName;
    }
    get() {
        return this.#domObj;
    }
}


// Init lists
const MORNING = new RoutineList ([
    "Drink monster",
    "Smoke cigarette",
    "Take bus to work",
    "Get coffee",
    "Go to work"
]);
const DAY = new RoutineList([
    "Drink another monster",
    "Smoke another cigarette",
    "Leave work",
    "Watch Scrubs",
    "Make rigatoni"
]);
const NIGHT = new RoutineList([
    "Eat rigatoni",
    "Smoke the last cigarette of the day",
    "Shower",
    "Go to bed",
    "Regret choices"
]);
document.querySelector("body").childNodes.forEach((item) => console.log(item))
// Load routines 
document.querySelector("#routineList").remove();
let wrapper = document.querySelector("#routineWrapper");
newList = document.createElement("ul");
newList.id = "routineList";
wrapper.appendChild(newList);
let time =  new Date().getHours();



if(time < 11 && time > 5) {
    time = "Morning";
    MORNING.addTo()

} else if(time < 19) {
    time = "Day";
    DAY.addTo();
} else {
    time = "Night";
    NIGHT.addTo();
}
document.querySelector("#currentTime").innerHTML = time;
document.querySelector("#timeOfDayImg").src = "img/pic"+ time + ".png"


