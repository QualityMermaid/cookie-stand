"use strict"

console.log("I am running Salmon script")
// create object locations, all propertries will likely be the same, create one with all the code working THEN copy it and change the shop location
// locations are Seattle, Tokyo, Dubai, Paris and Lima
let totalCookiesSold = 0
const openHours = ["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"]

// const parentElement = document.getElementById("container");
// console.log(parentElement)
// const article = document.getElementById("article");
// const h3 = document.getElementById(seattle.storeName)
// console.log(h3)



const store = {
    storeName: "seattle",
    minCust: 23,
    maxCust: 65,
    avgCookiePerCust: 6.3,
    hardCookies: 100,
    custPerHour: [],
    cookiesPerHour: [],
    totalDailyCookies: 0,
    getCxPerH: function(){
        this.randomCust = randomCust(this.minCust,this.maxCust) + " Customers."
        console.log(this.randomCust + "Im here Seattle")
    }

    
}
console.log(store)

// function to generate a random number of customers per hour
function randomCust(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
store.getCxPerH();



const parentElement = document.getElementById("container");
console.log(parentElement);

const article = document.createElement("article");
parentElement.appendChild(article);

const h3 = document.createElement(store.storeName)
h3.textContent = store.storeName;
console.log(h3)
article.appendChild(h3)

const ul = document.createElement("ul");
article.appendChild(ul)

// Display output of each location
for (let i = 0; i < openHours.length; i++){
    const li=document.createElement("li");
    li.textContent = openHours[i];
    ul.appendChild(li);
    console.log(openHours +" HELO")
}
