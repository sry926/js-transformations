'use strict'

const main = input => {
  const arg = input.split(/\r\n|\r|\n/)
  const step = arg[1].split(' ')

  const stepCount = step.map((item, i) => {
    let count = 0
    while (step[count + i] >= step[count + i + 1]) {
      count++
    }
    return count
  })
  console.log(Math.max.apply(null, stepCount))
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))