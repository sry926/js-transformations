"use strict";
    
const main = arg => {
    arg = arg.trim().split("\n");
    const a = parseInt(arg[0].split(" ")[0]);
    const b = parseInt(arg[1].split(" ")[0]);
    const h = parseInt(arg[2].split(" ")[0]);
    
    console.log(((a + b) * h) / 2);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));