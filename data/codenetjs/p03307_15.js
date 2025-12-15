'use strict';
const inputRaw = require("fs").readFileSync("/dev/stdin", "utf8").trim();
const input = parseInt(inputRaw);

const FIXED_MULTIPLE = 2;

const process = variableMultiple => {
    for (let i=variableMultiple;;i+=variableMultiple) {
        if(i%FIXED_MULTIPLE === 0 && i%variableMultiple === 0) {
          return i;
        }
    }
}

console.log(process(input));