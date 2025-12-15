'use strict'

const main = (INPUT) => {
  const [S, T] = INPUT.split('\n')
  let str = S
  for (let i = 0; i < S.length; i++) {
    const tmp = str[0]
    str = str.slice(1) + tmp
    if (T === str) {
      console.log('Yes')
      return
    }
  }
  console.log('No')
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
