'use strict'

const main = INPUT => {
  const TMP = INPUT.split('\n')
  const K = Number(TMP[0].split(' ')[1])
  TMP.shift()
  const input = TMP.sort((a, b) => b - a).map(n => Number(n))
  let ans = input[0] - input[K - 1]
  for (let i = 0; i <= input.length - K; i++) {
    let a = input[i] - input[i + K - 1]
    if (ans > a) {
      ans = a
    }
  }
  console.log(ans)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
