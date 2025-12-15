
'use strict'

function main(input) {
  input = input.split('\n').map(v => v.split(' ').map(v => parseInt(v, 10)))
  const n = input[0][0]
  const k = input[0][1]

  const nums = input.slice(1, input.length)
  let counts = Array.apply(null, { length: 1e5 + 1 }).map(v => 0)
  for (let i = 0; i < n; i++) {
    counts[nums[i][0]] += nums[i][1]
  }
  // console.log(counts)

  let tmp = 0
  for (let i = 1; i <= 1e5 + 1; i++) {
    tmp += counts[i]

    if (tmp >= k) {
      console.log(i)
      return
    }
  }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'))