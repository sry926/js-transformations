'use strict'

function main(input) {

  const N = Number(input);

  const divisor = (n) => {
    const res = [];
    for (let i = 1; i <= n; i++) {
      if(n % i === 0) res.push(i);
    }
    return res;
  }

  let ans = 0;

  for (let i = 1; i <= N; i++) {
    if (i % 2 === 0) continue;

    if (divisor(i).length === 8) {
      ans++;
    }
  }

  console.log(ans);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
