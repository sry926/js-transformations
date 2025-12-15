"use strict";

function main(input){
  const args = input.trim().split(' ').map(_=>parseInt(_,10));
  const n = args[0];
  const a = args[1];
  const b = args[2];
  
  let cnt = 0;
  for(let i=1; i<=n; i++){
    const c = i.toString().split('').map(_=>parseInt(_,10)).reduce((acc,cur)=>acc+cur);
    if(a <= c && c <= b) cnt+=i;
  }
  
  console.log(cnt);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));  