'use strict';
function main(input) {
  input = input.split(/\s+/).map(x => x);
  let n = parseInt(input.shift());
  let m = parseInt(input.shift());
  let obj = [];

  for (let i = 0; i < n; ++i) {
    obj[i] = {};
    obj[i].price = parseInt(input.shift());
    obj[i].number = parseInt(input.shift());
  }

  obj.sort((a,b) => (a.price - b.price));

  let ans = 0, total = 0;
  for (let val of obj) {
    if (total + val.number <= m) {
      ans += val.price * val.number;
      total += val.number;
    } else {
      let remain = m - total;
      ans += val.price * remain;
      break;
    }
  }

  console.log(ans);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));