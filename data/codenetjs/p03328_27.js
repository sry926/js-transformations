"use strict";
let Main = input => {
    const array = input.split(" ").map(e => parseInt(e));
    const n = array.reduce((p, c) => c - p, 0);
    const lengthOfB =  n * (n + 1) / 2;
    console.log(lengthOfB - array[1]);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));