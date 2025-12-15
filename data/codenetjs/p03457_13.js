"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const N = parseInt(input[0]);
  // console.log(N);
  let currentX = 0;
  let currentY = 0;
  for (let i = 1; i < N + 1; i++) {
    let array = input[i].split(" ");
    let time = parseInt(array[0]);
    let x = parseInt(array[1]);
    let y = parseInt(array[2]);
    let moveX = x - currentX;
    let moveY = y - currentY;
    let totalMove = moveX + moveY;
    // ** 時間の総和を超えるとアウト
    if (time < totalMove) {
      console.log("No");
      break;
    }
    // ** time合計/奇数 * 移動の合計が奇数の場合OK
    if (
      (totalMove % 2 == 0 && time % 2 == 0) ||
      (totalMove % 2 != 0 && time % 2 != 0)
    ) {
      if (i == N) {
        console.log("Yes");
        break;
      }
    } else {
      console.log("No");
      break;
    }
  }
};
main(require("fs").readFileSync("/dev/stdin", "utf8"));
// https://atcoder.jp/contests/abc086/tasks/arc089_a
