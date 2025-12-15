'use strict';
function Main(stdin){
  const input = stdin.trim().split(' ');
  const N = input[0], K = input[1];
  let result = K;

  for (let i = 0; i < N-1; i++){
      result *= (K-1);
  }
  console.log(result);
}

// 固定
Main(require("fs").readFileSync("/dev/stdin", "utf8"));