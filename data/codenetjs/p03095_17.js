"use strict"
function Main(input){
  input=input.trim().split(/\s+/);
  var N=input.shift()-0;
  input=input.join("").replace(/\s+/g,"").split("");
  var alphabet=("abcdefghijklmnopqrstuvwxyz").split("");
  var counter=alphabet.map(x=>0);
  var j=0;
  for(let i=0;i<N;i++){
    j=alphabet.indexOf(input[i]);
    counter[j]++;
  }
  var reducer=(acc,cur)=>acc*(cur+1);
  console.log(counter.reduce(reducer,1)-1);
}

Main(require("fs").readFileSync("/dev/stdin","utf8"));