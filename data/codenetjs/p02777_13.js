'use strict';
function main(inn) {
  const input = inn.split("\n");
  const a = input[0].split(" ");
  const b = input[1].split(" ");
  let b1 = parseInt(b[0], 10);
  let b2 = parseInt(b[1], 10);
  const c = input[2];

  if (a[0] === c) {
    b1 --;
  } else {
    b2 --;
  }
  
  console.log(`${b1} ${b2}`);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));