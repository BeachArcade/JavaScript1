
console.log("ASS")
let a = setInterval(poop, 1000)
function poop(){
    console.log(document.querySelector("#delivery").checked);
}

document.querySelector("#delivery").addEventListener("click", showAddr)
document.querySelector("#pickup").addEventListener("click", showAddr)
function showAddr() {
    let addr = document.querySelector("#address");
    document.querySelector("#delivery").checked ?
        addr.style.display = "block" :
        addr.style.display = "none";
    document.querySelectorAll(".conditionalReq").forEach(element => {
        element.required = document.querySelector("#delivery").checked;
    })
}   