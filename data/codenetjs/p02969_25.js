"use strict";
const Main = (input) =>{
   let xs = input.trim().split(' ').map(v=>parseInt(v,10));
   let ans = Math.pow(xs[0],2) * 3;
   console.log(ans);
}
Main(require('fs').readFileSync('/dev/stdin','utf8'));