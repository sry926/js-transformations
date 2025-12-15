function main(input) {
  const inputs =input.split('\n')
  const [X, Y] = inputs[0].split(' ').map(Number)
  for (let i = 0; i <= 25; i++) {
    for (let j = 0; j <= 50; j++) {
      if (i + j === X && i * 4 + j * 2 === Y) {
        console.log('Yes')
        return
      }
    }
  }
  console.log('No')
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
