'use strict';
function Main(stdin){
  const input = stdin.trim().split(/\r?\n/g);
  const A_V= input[0].split(' ').map(str => Number(str));
  const A = A_V[0], V = A_V[1];
  const B_W= input[1].split(' ').map(str => Number(str));
  const B = B_W[0], W = B_W[1];
  const T = Number(input[2]);
  let result = 'NO';
  let kyori;
  const tidimu = V - W;
  if(A > 0 && B > 0){
      kyori = Math.abs(B - A);
  } else if(A < 0 && B < 0){
      kyori = Math.abs(B - A);
  } else {
      kyori = Math.abs(B) + abs(A);
  }

  if(tidimu * T > kyori) result = 'YES';
  console.log(result);
}

// 固定
Main(require("fs").readFileSync("/dev/stdin", "utf8"));