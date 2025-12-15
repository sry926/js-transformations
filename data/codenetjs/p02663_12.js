"use strict";

function main(input) {
  input = input.trim().split(" ");
  const H = parseInt(input[2]) - parseInt(input[0]);
  const M = parseInt(input[3]) - parseInt(input[1]);
  let minute = H * 60;

  minute = minute + M - parseInt(input[4]);
  console.log(minute);
}

main(require("fs").readFileSync("/dev/stdin", "utf-8"));
