'use strict'
function main(input) {
  input = input.trim().split(' ')
  const start = Math.min(Number(input[0]), Number(input[1]))
  const goal = Math.max(Number(input[0]), Number(input[1]))
  const result = start < Number(input[2]) && Number(input[2]) < goal
  console.log(result ? 'Yes' : 'No')
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
