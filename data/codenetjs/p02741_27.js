const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();
const array = [1, 1, 1, 2, 1, 2, 1, 5, 2, 2, 1, 5, 1, 2, 1, 14, 1, 5, 1, 5, 2, 2, 1, 15, 2, 2, 5, 4, 1, 4, 1, 51];
const K = +input.split('\n')[0];
console.log(array[K - 1]);