"use strict";
function turn(array, human) {
  switch(human) {
    case "a":
      if(array[0].length === 0) console.log("A");
      else {
        const next = array[0].slice(0,1);
        array[0] = array[0].slice(1);
        turn(array, next);
      }
      break;
    case "b":
      if(array[1].length === 0) console.log("B");
      else {
        const next = array[1].slice(0,1);
        array[1] = array[1].slice(1);
        turn(array, next);
      }
      break;
    case "c":
      if(array[2].length === 0) console.log("C");
      else {
        const next = array[2].slice(0,1);
        array[2] = array[2].slice(1);
        turn(array, next);
      }
      break;
  }
}

const input = require("fs").readFileSync("/dev/stdin","UTF-8").trim().split("\n");
turn(input,"a");