const main = (input) => {
  input = input.trim().split('\n')
  const N = parseInt(input[0], 10)
  const nums = input[1].split(' ')

  const x = {}
  let sum = 0
  for (let i = 0; i < N; i++) x[nums[i]] = ~~x[nums[i]] + 1
  for (let [, v] of Object.entries(x)) sum += v*(v-1) / 2
  for (let i = 0; i < N; i++) console.log(sum === 0 ? 0 : sum - Math.max(0, ~~x[nums[i]] - 1))
}


process.env.MYTEST ? test() : main(require('fs').readFileSync('/dev/stdin', 'utf8'))