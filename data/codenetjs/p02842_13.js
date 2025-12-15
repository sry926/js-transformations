'use strict'

const Main = (input) => {
  const N = parseInt(input.trim())

  let result = ':('

  const X = Math.floor(N / 108 * 100)
  const d = N * .05

  for (let i = 0; i <= d; i++) {
    if (Math.floor((X + i) * 1.08) === N) {
      result = X + i
    }
  }

  console.log(result)
  return result
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))