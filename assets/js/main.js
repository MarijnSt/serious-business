var update = document.getElementById("status");

//check on load
window.addEventListener("load", checkShop);

//make lists of the hours and minutes
var openingHourList = document.querySelectorAll(".openingHour");
var openingMinutesList = document.querySelectorAll(".openingMinutes");
var closingHourList = document.querySelectorAll(".closingHour");
var closingMinutesList = document.querySelectorAll(".closingMinutes");

//declare values to compare
var openingHour = 0;
var openingMinutes = 0;
var closingHour = 0;
var closingMinutes = 0;

//get current time
var currentHour = 0;
var currentMinutes = 0;
var currentDay = 0;

function getCurrentTime(){
	var now = new Date();
	currentDay = now.getDay();
	currentHour = now.getHours();
	currentMinutes = now.getMinutes();
}

function getHours(){
	//convert system from sunday = 0 to sunday = 6
	var val = currentDay;
	var numberOfDay;
	if (val == 0) {
		numberOfDay = 6;
	} else {
		numberOfDay = val - 1;
	}
	// edit values to compare
	openingHour = parseInt(openingHourList[numberOfDay].textContent);
	openingMinutes = parseInt(openingMinutesList[numberOfDay].textContent);
	closingHour = parseInt(closingHourList[numberOfDay].textContent);
	closingMinutes = parseInt(closingMinutesList[numberOfDay].textContent);
}


function updateStatus(){
	var opening;
	var closing;
	//compare with opening hour
	if (currentHour > openingHour) {
		opening = true;
	} else if (currentHour = openingHour) {
		if (currentMinutes >= openingMinutes) {
			opening = true;
		} else {
			opening = false;
		}
	} else {
		opening = false;
	}

	//compare with closing hour
	if (currentHour < closingHour) {
		closing = true;
	} else if (currentHour = closingHour) {
		if (currentMinutes <= closingMinutes) {
			closing = true;
		} else {
			closing = false;
		}
	} else {
		closing = false;
	}

	//is shop open
	if (opening == true && closing == true){
		update.textContent = "OPEN";
		update.classList.add("open");
	} else {
		update.classList.add("closed");	
	}
}

function checkShop(){
	getCurrentTime();
	getHours();
	updateStatus();
}