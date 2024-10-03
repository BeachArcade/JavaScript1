fetchData();
let isLoaded = false;
let theta = 0;
let a = setInterval(() => {
    let text = document.querySelector("#loading");
    text.style.transform = `rotate(${theta += 10}deg)`;
    document.querySelector("body").style.transform = `rotate(${(-1 * theta) - 20}deg)`
}, 100);
    
async function fetchData() {
    let text = document.querySelector("#loading");
    // const API = "https://api.restful-api.dev/objects";
    const API = "json/objects.json";
    const response = await fetch(API);
    const data = await response.json();
    
    if(data != null) {
        clearInterval(a);
        isLoaded = true;
        text.remove();
        document.querySelector("body").style.transform = "none";
    }
    const table = document.querySelector("#phoneTable tbody");

    for(let i = 0; i < data.length; i++) {
        let row = document.createElement("tr");
        let str = `<td>${data[i].id}</td>`;
        str += `<td>${data[i].name}</td>`;

        // if(data[i].data != null) {
        //     if(data[i].data.color != undefined) {
        //         str += `<td>${data[i].data.color}</td>`;
        //     } else {
        //         str += "<td>Not Colored</td>"
        //     }
        // } else {
        //     str += "<td>Not Colored!</td>"
        // }

        let color = (data[i].data?.color) 
        str += `<td>${(data[i].data?.color || "Not Colored")}</td>`;

        row.innerHTML = str;
        table.append(row)
    }
}