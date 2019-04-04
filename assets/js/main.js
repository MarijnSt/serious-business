// Objecten maken
var day = document.querySelector(".day");
var openingHour = parseInt(((document.querySelector(".openingHour")).textContent), 10);
var openingMinutes = parseInt(((document.querySelector(".openingMinutes")).textContent), 10);
var closingHour = parseInt(((document.querySelector(".closingHour")).textContent), 10);
var closingMinutes = parseInt(((document.querySelector(".closingMinutes")).textContent), 10);
var day = {};

function createDayObject(){
	day.openingHour = openingHour;
	day.openingMinutes = openingMinutes;
	day.closingHour = closingHour;
	day.closingMinutes = closingMinutes;
}

//get current time
var currentHour = 0;
var currentMinutes = 0;
var currentDay = 0;
var currentTime = {};

function getCurrentTime(){
	var now = new Date();
	currentDay = now.getDay();
	currentTime.day = currentDay;
	currentHour = now.getHours();
	currentTime.hour = currentHour;
	currentMinutes = now.getMinutes();
	currentTime.minutes = currentMinutes;
}

// Opening checken

// Closing checken

// Is winkel open