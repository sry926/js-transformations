'use strict'

function Main(input) {
  let N = Number(input);
  let answer = 0;
  
  while(N !== 0) {
    if (N >= 93312) {
      N -= 93312;
      answer += 2;
    } else if (N >= 59049) {
      N -= 59049;
      answer++;
    } else if (N >= 46656) {
      N -= 46656;
      answer++;
    } else if (N >= 7776) {
      N -= 7776;
      answer++;
    } else if (N >= 6561) {
      N -= 6561;
      answer++;
    } else if (N >= 1296) {
      N -= 1296;
      answer ++;
    } else if (N >= 729) {
      N -= 729;
      answer++;
    } else if (N >= 216) {
      N -= 216;
      answer++;
    } else if (N >= 81) {
      N -= 81;
      answer++;
    } else if (N >= 36) {
      N -= 36;
      answer++;
    } else if (N >= 12) {
      N -= 12;
      answer += 2;
    } else if (N >= 9) {
      N -= 9;
      answer++;
    } else if (N >= 6) {
      N -= 6;
      answer++;
    } else {
      N--;
      answer++;
    }
  }
  
  console.log(answer);
  
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());