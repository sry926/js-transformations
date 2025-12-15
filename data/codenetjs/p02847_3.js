var input = require("fs").readFileSync("/dev/stdin", "utf8");

var weeks = ['SAT', 'FRI', 'THU', 'WED', 'TUE', 'MON', 'SUN'];

var result = weeks.indexOf(input) + 1;
console.log(result);
