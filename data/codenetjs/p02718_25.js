'use strict';
const p = s => console.log(s);

// inputに入力データ全体が入る
function Main(input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  input = input.split("\n");
  let N = input[0].split(" ")[0];
  let M = input[0].split(" ")[1];
  let tmp = input[1].split(" ");
  let sum =0;
  let cnt=0;
  let result = 'No';

  let A = [];
  for (let i= 0; i < N; i++) {
    A.push(parseInt(tmp[i],10));
    sum += parseInt(tmp[i],10);
  }

  for (let i=0; i < N; i++) {
    if( A[i] > (sum/(4*M))) cnt++;
    if( cnt > M -1) {
        result = "Yes";
        break;
    }
  }
  p(result);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
