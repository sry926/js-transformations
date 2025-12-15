"use strict";
const main = input => {
  input = input[0].split(' ').map(val => parseInt(val, 10));
  const l = input[0], r = input[1];
  // console.log(l, r);
  let num = 0;
  if (r > 2019) {
    if (l < 2019) {
      num = 2019*2020;
    } else {
      num = l*(l+1);
    }
    num = num%2019;
  } else {
    num = l*(l+1);
  }
  console.log(num);
  
  
  
};
main(require("fs").readFileSync("/dev/stdin", "utf8").split('\n'));