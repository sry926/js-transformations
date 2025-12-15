'use strict'
function main(inp) {
  inp = inp.trim().split(' ').map(x => x*1);
  
  let ans = "";
  if(Math.sqrt(inp[0])*1 + Math.sqrt(inp[1])*1 < Math.sqrt(inp[2])){
	ans = "Yes";
  } else {
	ans = "No";
  }
  console.log(ans);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
