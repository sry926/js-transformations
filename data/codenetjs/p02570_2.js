"use strict";

function main(input) {
  input = input.trim().split(" ");
  const D = Number(input[0]);
  const T = Number(input[1]);
  const S = Number(input[2]);

  if (D / S <= T) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

function numberSort(array) {
  array.sort(f);
  return array;
}

var f = function (a, b) {
  return a - b;
};

main(require("fs").readFileSync("/dev/stdin", "utf-8"));
