"use strict"

console.log("I am running main page script")

const openHours = ["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"]

const openFrom = openHours[0];
const closeAt = openHours[openHours.length-1];

let storeLocations = [
    new Store("Seattle","13 New Bridge", "seattle.jpeg", openHours ),
    new Store("Tokyo","46 White Lane","tokyo.jpeg", openHours ),
    new Store("Dubai","9b Street 3 - Al Barsha", "dubai.jpeg", openHours),
    new Store("Paris","94 7 Rue de la Cossonnerie","paris.jpeg", openHours),
    new Store("Lima","Av. Alfredo Mendiola 1400","lima.jpeg", openHours),
]


const container = document.getElementById("container")

const h2 = document.createElement("h2")
h2.textContent = "Store Locations"
container.appendChild(h2);

const div = document.createElement("div")
div.textContent = `Gloable opening hours ${openFrom} till ${closeAt}`
container.appendChild(div)

// const article = document.createElement("article");
// container.appendChild(article);

// const div = document.createElement("div")
// article.appendChild(div);

// const ul = document.createElement("ul");
// div.appendChild(ul);

// let renderStoreList(storeLocations)

function Store(storeName,storeAddress,imgFileName, times){
    
    this.storeName = storeName;
    this.storeAddress = storeAddress;
    this.imageUrl = "images/" + imgFileName;
    this.times = times;
    // this.render();
}

Store.prototype.render = function(){
    const article = document.createElement("article");
    article.setAttribute("class","article-content")
    container.appendChild(article);

    const h3 = document.createElement("h3")
    h3.textContent = this.storeName
    article.appendChild(h3)

    const p = document.createElement("p")
    p.textContent = this.storeAddress
    p.setAttribute("class", "storeAddress")
    article.appendChild(p)

    const img = document.createElement("img")
    img.setAttribute("src", this.imageUrl)
    img.setAttribute("alt", `${this.storeName} store location.`)
    img.setAttribute("class", "shop-image")
    article.appendChild(img)
    

}

function renderAllShops(){
    for (let i = 0; i < storeLocations.length; i++){
        storeLocations[i].render();
    }
}
renderAllShops()


// function renderStoreList(storeLocations){
//     console.log(storeLocations.length)
//     console.log(storeLocations)

//     for(let i = 0; i < storeLocations.length; i++){
//         const li = document.createElement("li")
//         li.textContent = storeLocations[i].storeName;
//         // const img = document.createElement("img")
//         // img = storeLocations[i].image;
//         console.log(storeLocations[i].storeName)
//         ul.appendChild(li);  
//         // ul.appendChild(img);  
//     }
// }


