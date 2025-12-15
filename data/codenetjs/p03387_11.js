'use strict'

function main(s) {
  
  s = s.split('\n')[0].split(' ').map(n => Number(n));
  const A = s[0];
  const B = s[1];
  const C = s[2];

  const abc_sum = A + B + C;
  let same_sum = Math.max(...[A, B, C]) * 3;

  if (abc_sum % 2 !== same_sum % 2) same_sum += 3;

  const answer = (same_sum - abc_sum) / 2;
  console.log(answer);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
