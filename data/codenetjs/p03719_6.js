"use strict";

function main(input){
  const args = input.trim().split(' ').map(_=>parseInt(_,10));
  console.log(args[0] <= args[2] && args[2] <= args[1] ? "Yes" : "No");
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));  