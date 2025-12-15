"use strict";
// import bigInt from 'big-integer'

const Main = input => {
  input = input.trim().split("\n");
  const h = input[0];
  const w = parseInt(input[1], 10);
  const n = parseInt(input[2], 10);

  const divider = h >= w ? h : w;

  console.log(Math.ceil(n / divider));
};

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
