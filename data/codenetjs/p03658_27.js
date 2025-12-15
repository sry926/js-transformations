'use strict'

function main(input) {
  input = input
    .trim()
    .split('\n')
    .map(v => v.split(' ').map(Number))

    const n = input[0][0]
    const k = input[0][1]
    const sticks = input[1].sort((a,b)=>b-a)
    
    const ans = sticks.slice(0, k).reduce((a,b)=>a+b)
    console.log(ans)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'))
