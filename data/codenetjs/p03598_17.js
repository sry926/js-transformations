"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const N = parseInt(input[0]);
  const K = parseInt(input[1]);
  const X = input[2];
  const array = X.split(" ");
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    let distanceA = parseInt(array[i]) * 2;
    let distanceB = (K - parseInt(array[i])) * 2;
    if (distanceA < distanceB) {
      result += distanceA;
    } else {
      result += distanceB;
    }
  }
  console.log(result);
};
main(require("fs").readFileSync("/dev/stdin", "utf8"));
// https://atcoder.jp/contests/abc074/tasks/abc074_a
