"use strict";

function main(input) {
  input = input.trim().split("\n");
  const N = parseInt(input[0]);
  const line_two = input[1].split(" ");
  let ans = 0;

  for (let i in line_two) {
    if ((parseInt(i) + 1) % 2 != 0 && parseInt(line_two[i]) % 2 != 0) {
      ans++;
    }
  }

  console.log(ans);
}

function numberSort(array) {
  array.sort(f);
  return array;
}

var f = function (a, b) {
  return a - b;
};

main(require("fs").readFileSync("/dev/stdin", "utf-8"));
