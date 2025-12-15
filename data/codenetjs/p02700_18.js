const main = (input) => {
  let [a, b, c, d] = input.trim().split(' ').map(Number)

  while (a>0 && c>0) {
    c -= b
    if (c <= 0) return console.log('Yes')
    a -= d
  }
  return console.log('No')
}

process.env.MYTEST ? test() : main(require('fs').readFileSync('/dev/stdin', 'utf8'))