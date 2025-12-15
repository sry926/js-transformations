"use strict";
// inputに入力データ全体が入る
const main = (input) => {
  const [a, b, c] = input.trim().split(" ").map(Number);
  if ((a + c) / 2 === b) {
    return "YES";
  } else {
    return "NO";
  }
};

// ※この行以降は編集しない (標準入力から一度に読み込みMainを呼び出します)
console.log(main(require("fs").readFileSync("/dev/stdin", "utf8")));
