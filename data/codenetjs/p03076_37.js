"use strict";

const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();

const inputs = input.split("\n").map(i => +i);

const round = (n) => {
  return Math.ceil(n / 10) * 10;
}

const diff = (n) => round(n) - n;

const exec = (inputs) => {
  const sorted = inputs.sort( (a, b) => diff(b) - diff(a) );
  let time = 0;
  let first = false;
  for (let i = 0; i < inputs.length; i++) {
    if (diff(sorted[i]) === 0) {
      time += sorted[i];
      continue;
    }
    if (!first) {
      time += sorted[i];
      first = true;
      continue;
    }
    time += round(sorted[i]);
  }
  return time;
}

console.log(exec(inputs));
