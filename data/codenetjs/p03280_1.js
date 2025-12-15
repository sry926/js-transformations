"use strict"
// inputに入力データ全体が入る
function Main(input){
    console.log(input.split(" ").map(e=>+e).reduce((a, b)=>a*b-(a+b-1)));
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));