"use strict";

const main = (arg) => {
  let X = parseInt(arg);
  let result = 360 / X;
  let answer = Math.ceil(result);
  console.log(answer);
};
main(require("fs").readFileSync("/dev/stdin", "utf8"));