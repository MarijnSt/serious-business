# Opening Hours

### Approach

* Create page with a simple grid: three columns and 8 rows
	* Top row --> header
	* first column: days
	* second column: hours
	* right column: spanning all rows (use flexbox to center)

* Create an object for each day that contains the opening hours as opening and closing properties
	* create empty week object
	* nest new day objects in it
	* opening and closing properties (FORMAT?)

* Show message if shop is open:
	* Compare current day with objects to find the right day
	* Compare current time with properties

### TODO

* Create objects for every day (in the right order 0-6)
* Fill monday object with example hours

### Notation of current day and time

* Day: 0 - 6 (0 = sunday)
* Hour: 0 - 23
* Minutes: 0 - 59


### Resources

https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Date