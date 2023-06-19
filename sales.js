"use strict"

console.log("I am running Salmon script")
// create object locations, all propertries will likely be the same, create one with all the code working THEN copy it and change the shop location
// locations are Seattle, Tokyo, Dubai, Paris and Lima
let totalCookiesSold = 0
const container = document.getElementById("container")

const openHours = ["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"]

const seattle = {
    storeName: "seattle",
    minCust: 23,
    maxCust: 65,
    avgCookiePerCust: 6.3,
    custPerHour: [],
    cookiesPerHour: [],
    totalDailyCookies: 0,
    calcCustomersEachHour: function(){
        for (let i = 0; i < openHours.length; i++){
        this.custPerHour.push(randomCust(this.minCust,this.maxCust))
        // console.log(this.randomCust + "Im here Seattle")
        console.log(this.custPerHour + "Im here Seattle")
        }
    },

    calcCookiesEachHour: function(){
        for (let i = 0; i < openHours.length; i++){
            const oneHour = Math.ceil(this.custPerHour[i] * this.avgCookiePerCust);
            this.cookiesPerHour.push(oneHour);
            this.totalDailyCookies += oneHour;
            console.log(this.cookiesPerHour + " and this "+ this.totalDailyCookies)
            totalCookiesSold = totalCookiesSold + this.totalDailyCookies
            console.log(this.totalDailyCookies + " running total sold")

        }        
    },

    render: function(){

        this.calcCustomersEachHour()
        this.calcCookiesEachHour()
    
        const article = document.createElement("article");
        container.appendChild(article);

        const h3 = document.createElement("h3")
        h3.textContent = this.storeName;
        console.log(h3)
        article.appendChild(h3)

        const ul = document.createElement("ul");
        article.appendChild(ul)

            // Display output of each location
        for (let i = 0; i < openHours.length; i++){
            const li=document.createElement("li");
            li.textContent = openHours[i] + " sold " + this.cookiesPerHour[i] + " cookies. Had " + this.custPerHour[i] + " customers.";
            ul.appendChild(li);
            console.log(openHours +" HELO" + this.cookiesPerHour)
        }
        console.log(this.totalDailyCookies + " total sold")
        const total = document.createElement("total")
        total.textContent = "This week we have sold " + this.totalDailyCookies + " cookies!";
        article.appendChild(total)

    },

    
}
console.log(seattle)
seattle.render()

// function to generate a random number of customers per hour
function randomCust(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}






// // Display output of each location
// for (let i = 0; i < openHours.length; i++){
//     const li=document.createElement("li");
//     li.textContent = openHours[i];
//     ul.appendChild(li);
//     console.log(openHours +" HELO")
// }
