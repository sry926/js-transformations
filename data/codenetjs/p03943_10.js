"use strict";

function main(arg){
  const input = arg.trim().split(' ').map(_=>parseInt(_, 10)).sort();
  if(input[0] + input[1] === input[2])
  console.log("Yes");
  else
    console.log("No");
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));  