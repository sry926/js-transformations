"use strict";

// read lines from stdin
const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split("\n");

const N = parseInt(input[0], 10);

const A = input[1]
  .split(" ")
  .map(val => parseInt(val, 10))
  .sort((a, b) => b - a);

while (A[1]) {
  A[0] = A[0] % A[1];

  if (A[0] === 0 || A.indexOf(A[0], 1) !== -1) {
    A.shift();
  } else if (A[0] === 1) {
    A[1] = 0;
  } else {
    A.sort((a, b) => b - a);
  }
}

console.log(A[0]);
