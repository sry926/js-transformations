"use strict";

function main(input) {
  input = input.trim().split("\n");
  const T = parseInt(input[2]);
  const line_one = input[0].split(" ");
  const line_two = input[1].split(" ");
  let A = parseInt(line_one[0]);
  let B = parseInt(line_two[0]);

  const ans = B - A < T * (parseInt(line_one[1]) - parseInt(line_two[1]));

  if (ans) {
    console.log("YES");
  } else {
    console.log("NO");
  }

  // for (let i = 0; i < T; i++) {
  //   A = A + parseInt(line_one[1]);
  //   B = B + parseInt(line_two[1]);
  // }
  // if (A > B) {
  //   console.log("YES");
  // } else {
  //   console.log("NO");
  // }
}

main(require("fs").readFileSync("/dev/stdin", "utf-8"));
