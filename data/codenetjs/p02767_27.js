"use strict";
function Main(input) {
  input = input.split("\n");
  let n = Number(input[0]);
  let place_array = input[1].split(" ").map(Number);
  let min = 0;
  for (let cp = 0; cp < 100; cp++) {
    let tmp_total = 0;
    for (let i = 0; i < n; i++) {
      tmp_total += (cp - place_array[i]) ** 2;
      //console.log(`${point} - ${place_array[index]}の2乗 = ${(point - place_array[index]) ** 2}`);
    }
    if (cp === 0) min = tmp_total;
    min = min < tmp_total ? min : tmp_total;
  }
  console.log(min);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));