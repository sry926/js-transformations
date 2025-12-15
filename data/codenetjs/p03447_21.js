"use strict";
    
const main = arg => {
    arg = arg.trim().split("\n");
    const X = parseInt(arg[0].split(" ")[0]);
    const A = parseInt(arg[1].split(" ")[0]);
    const B = parseInt(arg[2].split(" ")[0]);
    
    console.log((X - A) % B);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));