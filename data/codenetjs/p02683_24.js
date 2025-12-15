function main(input) {
  const args = input.split('\n')
  const nums = args[0].split(' ')
  const n = Number(nums[0])
  const m = Number(nums[1])
  const x = Number(nums[2])
  const books = args.slice(1, args.length).map(b => b.split(' ').map(v => Number(v)))
  let sumM = []
  let count
  let sum
  for (let i=0; i < 2**n; i++) {
    let sumA = Array(m).fill(0)
    count = 0
    sum = 0
    for (let k=0; k < n; k++) {
      if((i >> k) & 1 === 1 ) {
        for (let j=0; j < m; j++) {
          sumA[j] += books[k][j+1]
        }
        sum += books[k][0]
      }
    }
    if (sumA.filter(v => v >= x).length === m) {
      sumM.push(sum)
    }
  }
  if (sumM.length === 0) {
    console.log(-1)
  } else {
    console.log(Math.min(...sumM))
  }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'))