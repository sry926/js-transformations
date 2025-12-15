'use strict'

function main(input) {
  input = input.split('\n');
  const NK = input[0].split(' ').map(n => Number(n));
  const A = input[1].split(' ').map(n => Number(n));
  const countBucket = [...Array(NK[0]+1)].fill(0);

  for (const num of A) {
    countBucket[num] += 1;
  }
  console.log(countBucket.sort((a, b) => b - a).slice(NK[1]).reduce((a, b) => a + b));
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
