"use strict";
    
const main = arg => {
    arg = arg.trim().split("\n");
    const A = parseInt(arg[0]);
    const B = parseInt(arg[1]);
    
    if(A !== 1 && B !== 1) {
        console.log(1)
    }
    
    if(A !== 2 && B !== 2) {
        console.log(2)
    }
    
    if(A !== 3 && B !== 3) {
        console.log(3)
    }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));