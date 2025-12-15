'use strict'

function main(inp) {
  inp = inp.trim().split(' ').sort((a, b) => (Number(a) - Number(b)))
  if ((inp[0] == inp[1]) || (inp[1] == inp[2])) {
    if (!(inp[0] == inp[1] && (inp[1] == inp[2]))) {
      return console.log('Yes')
    }
  }
  console.log('No')
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
