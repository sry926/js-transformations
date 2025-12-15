"use strict";
function Main(input) {
  // 最終的に回答を格納するための変数
  let sum = 0;
  // カウンター
  let i = 1;
  // inputをどんどん半分にしていき1になったら終了
  while(input != 1){
    // カウンターを足算していく
    sum += i;
    // inputを切り捨てで2分に1にする
    input = Math.floor(input/2);
    // カウンターを2倍にする
    i *= 2;
  }
  // sumを2倍にして最初の1回分足したものが答え
  console.log(sum * 2 + 1);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
