"use strict"
function Main(input) {
  input = input.trim().split('\n');
  let S = input[1];
  const trg = 'ABC';

  let ret = 0;
  while(true){
    let num = S.indexOf(trg)
    if(num !== -1){
      S = S.slice(num+3);
      ret += 1;
    } else {
      break;
    }
  }

  console.log(ret);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));