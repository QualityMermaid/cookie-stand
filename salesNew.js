"use strict"

console.log("I am running my NEW Salmon script")

const totalCookiesSold = 0
const totalCookiesSoldWorldWide = 0
const openHours = ["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"]

const container = document.getElementById("container")

const h2 = document.createElement("h2");
h2.textContent = "Sales"
container.appendChild(h2);

const article = document.createElement("article");
container.appendChild(article);

const table = document.createElement("table")
article.appendChild(table);

const tr = document.createElement("tr")
table.appendChild(tr)
storeOpenHours()

function storeOpenHours(){
const th = document.createElement("th")
th.textContent = "Shop Location";
tr.appendChild(th);

for(let i = 0; i < openHours.length; i++){
    const td = document.createElement("td");
    td.textContent = openHours[i];
    tr.appendChild(td);
}
}

const td = document.createElement("td");
    td.textContent = "Daily Location Total";
    tr.appendChild(td);

function Store(storeName, minCust, maxCust, avgCookiePerCust){
    
    this.storeName = storeName;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookiePerCust = avgCookiePerCust;
    this.custPerHour = [];
    this.calcCustomersEachHour();
    this.cookiesPerHour = [];
    this.calcCookiesEachHour();
    this.totalDailyCookies = this.calcDailyCookies();

    this.render();
}

Store.prototype.calcCustomersEachHour = function(){
    for(let i=0; i < openHours.length; i++){
        this.custPerHour.push(randomCust(this.minCust,this.maxCust));
    }    
}

Store.prototype.calcCookiesEachHour = function(){
    for (let i = 0; i < openHours.length; i++){
        const oneHour = Math.ceil(this.custPerHour[i] * this.avgCookiePerCust);
        this.cookiesPerHour.push(oneHour);
        this.totalCookiesSold += oneHour;
    }
}

function randomCust(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)

}

Store.prototype.calcDailyCookies = function(){
    let totalDailyCookies = 0
    for(let i = 0; i < this.cookiesPerHour.length; i++){
        totalDailyCookies += this.cookiesPerHour[i]
    }
    return totalDailyCookies
}


Store.prototype.render = function(){
    const containerElement = document.getElementById("container");

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
    const td = document.createElement("td");
    td.textContent = this.totalDailyCookies;
    tr.appendChild(td);

}

function hourTotals(stores){
    const tr = document.createElement("tr")
    table.appendChild(tr)

    const th = document.createElement("th")
    th.textContent = "Totals";
    tr.appendChild(th);

    for(let i = 0; i < openHours.length; i++){
        const td = document.createElement("td");
        let totalHourCookiesSold = 0
        for(let j = 0; j < stores.length; j++){
            totalHourCookiesSold += stores[j].cookiesPerHour[i]
        }
        td.textContent = totalHourCookiesSold
        tr.appendChild(td);
    }
    let totalGlobalSales = 0

    const td = document.createElement("td");
    for(let i = 0; i < stores.length; i++){
        totalGlobalSales += stores[i].totalDailyCookies
    }
    td.textContent = totalGlobalSales
    tr.appendChild(td);
}

const seattle = new Store("seattle", 23, 65, 6.3,)
const tokyo = new Store("tokyo", 3, 24, 1.2,)
const dubai = new Store("dubai", 11, 38, 3.7,)
const paris = new Store("paris", 20, 38, 2.3,)
const lima = new Store("lima", 2, 16, 4.6,)
hourTotals([seattle,tokyo,dubai,paris,lima])
