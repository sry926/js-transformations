'use strict'
function main(inp) {
  inp = inp.trim().split('\n')
  let ans = 0
  for (let i = 0; i < 3; i++) {
    if (inp[0][i] === inp[1][i]) ans++
  }
  console.log(ans)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
