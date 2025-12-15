'use strict'

function main(arg) {
  if (1200 <= arg) {
    console.log('ARC');
  } else {
    console.log('ABC');
  }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));