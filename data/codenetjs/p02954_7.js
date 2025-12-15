'use strict'
function main(inp) {
  inp = inp.trim()
  let L = []
  let R = []
  let ans = []
  let temp = 0

  for (let i = 0; i < inp.length; i++) {
    R[i] = 0
    if (inp[i] === 'R') {
      temp++
    } else if (temp > 0) {
      R[i] = Math.floor(temp / 2)
      R[i - 1] = temp - R[i]
      temp = 0
    }
  }
  temp = 0

  for (let i = inp.length - 1; i >= 0; i--) {
    L[i] = 0
    if (inp[i] === 'L') {
      temp++
    } else if (temp > 0) {
      L[i] = Math.floor(temp / 2)
      L[i + 1] = temp - L[i]
      temp = 0
    }
  }

  for (let i = 0; i < inp.length; i++) {
    ans[i] = R[i] + L[i]
  }
  console.log(ans.join(' '))
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
