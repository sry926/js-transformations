"use strict";
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var cin = input.trim().split(/ |\n/), cid = 0;

function main() {
    let K = +cin.shift();
    let S = cin.shift();
    if (S.length <= K) {
        console.log(S);
    } else {
        console.log(S.substring(0, K) + "...");
    }
}
main();