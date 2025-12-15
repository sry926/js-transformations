'use strict'

function main(input) {
  input = input.trim()
  
  console.log(eval(input))
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'))
 