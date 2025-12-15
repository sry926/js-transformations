"use strict";
const main = (input) => {
  const [a, b] = input.trim().split("\n");
  const rev = a.split("").reverse().join("");
  return rev === b ? "YES" : "NO";
};
console.log(main(require("fs").readFileSync("/dev/stdin", "utf8")));
