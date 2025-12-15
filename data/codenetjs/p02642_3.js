"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const N = parseInt(input[0]);
  const a_arr_orig = input[1].split(" ").map(i => parseInt(i)).sort((a, b) => b - a);
  const tyohuku = [];
  const a_arr = a_arr_orig.filter(function (x, i, self) {
    if (self.indexOf(x) !== i) tyohuku.push(x);
    return self.indexOf(x) === i;
  });

  let count = 0;

  for (let i = 0; i < a_arr.length; i++) {
    const target = a_arr[i]; // 割る数
    if (tyohuku.includes(target)) continue;

    let is_prime = true;
    for (let j = a_arr.length - 1; j > i; j--) {
      if (target % a_arr[j] === 0) {
        is_prime = false;
        break;
      }
      if (target / 2 < a_arr[j]) {
        break;
      }
    }
    if (is_prime) {
      count++;
    }
  }

  console.log(count);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));  
