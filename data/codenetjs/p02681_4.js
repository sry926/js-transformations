"use strict";

const main = arg => {
    const inputList = arg.trim().split("\n");
    // 回答を記述
    const S = inputList[0];
    const T = inputList[1];
    // if (T.indexOf(S) >= 0) {
    if (T.slice(0, -1) == S) {
      console.log("Yes");
    } else {
      console.log("No")
    }
  
  }

main(require('fs').readFileSync('/dev/stdin', 'utf8'));