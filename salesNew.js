"use strict"

console.log("I am running my NEW Salmon script")

const openHours = ["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"]

const addNewStore = document.getElementById("addNewStore")

let storeArr = [];

const allShops = []

const totalCookiesSold = 0
const totalCookiesSoldWorldWide = 0

const container = document.getElementById("container")

const h2 = document.createElement("h2");
h2.textContent = "---Sales---"
container.appendChild(h2);

const article = document.createElement("article");
article.setAttribute("class","table-article")
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

function Store(storeName, storeAddress, minCust, maxCust, avgCookiePerCust){
    
    this.storeName = storeName;
    this.storeAddress = storeAddress;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookiePerCust = avgCookiePerCust;
    this.custPerHour = [];
    this.calcCustomersEachHour();
    this.cookiesPerHour = [];
    this.calcCookiesEachHour();
    this.totalDailyCookies = this.calcDailyCookies();

    this.pushStore = function(){
    storeArr.push(this)
    // console.log(storeArr + " Is this working?")
    }
    this.pushStore()
    // this.render();
    console.log(allShops + " all shops")

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
    // const containerElement = document.getElementById("container");

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

// function hourTotals(stores){
//     const tr = document.createElement("tr")
//     table.appendChild(tr)

//     const th = document.createElement("th")
//     th.textContent = "Totals";
//     tr.appendChild(th);


//     for(let i = 0; i < openHours.length; i++){
//         const td = document.createElement("td");
//         let totalHourCookiesSold = 0
//         for(let j = 0; j < stores.length; j++){
//             totalHourCookiesSold += stores[j].cookiesPerHour[i]
//         }
//         td.textContent = totalHourCookiesSold
//         tr.appendChild(td);
//     }
//     let totalGlobalSales = 0

//     const td = document.createElement("td");
//     for(let i = 0; i < stores.length; i++){
//         totalGlobalSales += stores[i].totalDailyCookies
//     }
//     td.textContent = totalGlobalSales
//     tr.appendChild(td);
// }

const seattle = new Store("seattle", "13 New Bridge",23, 65, 6.3,)
const tokyo = new Store("tokyo", "46 White Lane", 3, 24, 1.2,)
const dubai = new Store("dubai", "9b Street 3 - Al Barsha", 11, 38, 3.7,)
const paris = new Store("paris", "94 7 Rue de la Cossonnerie",20, 38, 2.3,)
const lima = new Store("lima", "Av. Alfredo Mendiola 1400",2, 16, 4.6,)

addNewStore.addEventListener("submit", function(event){
    event.preventDefault();
    deleteOldRow(table);

    console.log("adding New Store")

    console.log(event)
    const storeName = event.target.storeName.value;
    const minCust = event.target.minCust.value;
    const maxCust = event.target.maxCust.value;
    const avgCookiePerCust = event.target.avgCookiePerCust.value;
    console.log(event)

    const newStore = new Store(storeName, storeAddress, minCust, maxCust, avgCookiePerCust)
    console.log(newStore)

    newStore.render()

    addNewStore.reset()

    sumTotal()
    alert(newStore.storeName + " has been added.")

})




function renderAllCurrentShops(){
    for (let i = 0; i < storeArr.length; i++){
        storeArr[i].render()
    }
}


renderAllCurrentShops()

function deleteOldRow(table) {
    let tableToRemove = document.getElementById(table);
    let rowCount = table.rows.length;

    table.deleteRow(rowCount -1);
}


function sumTotal(){
    const totalrow = document.createElement("tr")
    table.appendChild(totalrow)

    const totalsheader = document.createElement("th")
    totalsheader.textContent = "Totals";
    totalrow.appendChild(totalsheader);


    for(let i = 0; i < openHours.length; i++){
        const totaldata = document.createElement("td");
        let totalHourCookiesSold = 0
        for(let j = 0; j < storeArr.length; j++){
            totalHourCookiesSold += storeArr[j].cookiesPerHour[i];
            totaldata.textContent = totalHourCookiesSold
        }
        totalrow.appendChild(totaldata);
    }

    let totalGlobalSales = 0

    const totaldata = document.createElement("td");
    for(let i = 0; i < storeArr.length; i++){
        totalGlobalSales += storeArr[i].totalDailyCookies
    }
    totaldata.textContent = totalGlobalSales
    totalrow.appendChild(totaldata);
}
sumTotal()

