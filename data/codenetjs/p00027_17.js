'use strict';

var DateToDay = function(year, month, date) {
	if (month == 1 || month == 2) {
		month += 12;
		--year;
	}
	var j = Math.floor(year / 100);
	var k = year % 100;
	var h = (date + Math.floor(26*(month + 1)/10) + k + Math.floor(k/4) + Math.floor(j/4) + 5*j) % 7;
	var day;
	switch (h) {
		case 0:
			day = 'Saturday';
			break;
		case 1:
			day = 'Sunday';
			break;
		case 2:
			day = 'Monday';
			break;
		case 3:
			day = 'Tuesday';
			break;
		case 4:
			day = 'Wednesday';
			break;
		case 5:
			day = 'Thursday';
			break;
		case 6:
			day = 'Friday';
			break;
	}
	return day;
}

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dates = input.trim().split('\n');
//var dates = ['1 1', '2 29', '0 0'];
var year = 2004;
while (true) {
	var date = dates.shift().split(' ');
	if (date[0] === '0' || date[1] === '0') {
		break;
	}
	console.log(DateToDay(year, parseInt(date[0]), parseInt(date[1])));
}