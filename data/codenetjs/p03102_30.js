'use strict';
function main(input) {
  input = input.split(/\s+/).map(x => x);
  // console.log(input);
  let n = input.shift();
  let m = input.shift();
  let c = input.shift();
  let b = [];
  let ans = 0;

  for (let i = 0; i < m; ++i) b.push(input.shift());
  for (let i = 0; i < n; ++i) {
    let total = 0;
    for (let j = 0; j < m; ++j) {
      let a = input.shift();
      total += a * b[j];
    }
    total += Number(c);
//    console.log(total)
    if (total > 0) ans += 1;
  }

  console.log(ans);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));