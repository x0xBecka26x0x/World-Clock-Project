setInterval(function() {

let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");


losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]a[</small>]");
}, 1000);


setInterval(function() {
let newYorkElement = document.querySelector("#new-york");
let newYorkDateElement = newYorkElement.querySelector(".date");
let newYorkTimeElement = newYorkElement.querySelector(".time");
let newYorkTime = moment().tz("America/New_York");


newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
newYorkTimeElement.innerHTML = newYorkTime.format("h:mm:ss [<small>]a[</small>]");
}, 1000);




