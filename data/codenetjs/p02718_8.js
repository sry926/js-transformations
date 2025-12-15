"use strict";

function Main(input) {
  var inputArr = input.split("\n");
  var nm = inputArr[0].split(" ");
  var as = inputArr[1].split(" ").map(function (e) {
    return Number(e);
  });
  var sum_a = as.reduce(function (pre, cur) {
    return pre += cur;
  });
  var i = 0;
  var count = 0;

  while (i < as.length) {
    if (as[i] >= sum_a * (1 / (4 * nm[1]))) {
      count++;
    }

    i++;
  }

  console.log(count >= nm[1] ? 'Yes' : 'No');
} // Main(`12 3
// 4 56 78 901 2 345 67 890 123 45 6 789`)


Main(require("fs").readFileSync("/dev/stdin", "utf8"));