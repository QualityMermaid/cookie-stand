"use strict"

console.log("I am running my NEW Salmon script")

const totalCookiesSold = 0
const totalCookiesSoldWorldWide = 0

const container = document.getElementById("container")
const article = document.createElement("article");
        container.appendChild(article);

const openHours = ["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"]

function Store(storeName, minCust, maxCust, avgCookiePerCust){
    
    this.storeName = storeName;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookiePerCust = avgCookiePerCust;
    this.custPerHour = [];
    this.calcCustomersEachHour();
    this.cookiesPerHour = [];
    this.calcCookiesEachHour();
    // this.totalCookiesSold = this.totalCookiesSold;
    this.totalCookiesSold();

    this.render();
}

Store.prototype.calcCustomersEachHour = function(){
    for(let i=0; i < openHours.length; i++){
        this.custPerHour.push(randomCust(this.minCust,this.maxCust))
        console.log(this.custPerHour + "Im here Seattle")
    }    
}

Store.prototype.calcCookiesEachHour = function(){
    for (let i = 0; i < openHours.length; i++){
        const oneHour = Math.ceil(this.custPerHour[i] * this.avgCookiePerCust);
        this.cookiesPerHour.push(oneHour);
    }
}

function randomCust(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)

}

Store.prototype.totalCookiesSold = function(){
    for( let i = 0; i < this.cookiesPerHour; i++)
    this.totalCookiesSold += this.totalCookiesSold + [i]
    console.log("total cookies sold " + this.totalCookiesSold)
}

Store.prototype.render = function(){
    const containerElement = document.getElementById("container");

    const article = document.createElement("article");
    containerElement.appendChild(article);

    const table = document.createElement("table")
    article.appendChild(table);

    const tr = document.createElement("tr")
    table.appendChild(tr)

    const th = document.createElement("th")
    th.textContent = this.storeName;
    tr.appendChild(th)

    for(let i = 0; i < openHours.length; i++){
        const td = document.createElement("td");
        td.textContent = this.cookiesPerHour[i];
        tr.appendChild(td);
    }

}

// for(let i = 0; i < openHours.length; i++){
//     const td = document.createElement("td");
//     td.textContent = openHours[i];
//     tr.appendChild(td);
// }

const seattle = new Store("seattle", 23, 65, 6.3,)
const tokyo = new Store("tokyo", 3, 24, 1.2,)
const dubai = new Store("dubai", 11, 38, 3.7,)
const paris = new Store("paris", 20, 38, 2.3,)
const lima = new Store("lima", 2, 16, 4.6,)

// let num = randomCust(3,19)
// console.log(num)
console.log(seattle);

