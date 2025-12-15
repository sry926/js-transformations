"use strict";

function main(input) {
  input = input.trim().split(" ");

  let Y = parseInt(input[1]);

  let can = false;
  for (let i = 0; i < parseInt(input[0]); i++) {
    if (Y >= 4) {
      Y = Y - 4;
    } else {
      Y = Y - 2;
    }
    if (Y == 0) {
      can = true;
      break;
    }
  }
  if (can) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

main(require("fs").readFileSync("/dev/stdin", "utf-8"));
