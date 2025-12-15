"use strict"
function Main(input) {
  input = Number(input.trim());

  console.log(input*input);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));