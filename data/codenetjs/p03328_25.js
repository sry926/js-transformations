"use strict";

function main(arg) {
    const a = parseInt(arg.split("\n")[0].split(" ")[0]);
    const b = parseInt(arg.split("\n")[0].split(" ")[1]);
    
    const diff = b - a;
    let indexB = 0;
    
    for(let i=0; i<=diff; i++) {
        indexB += i;
    }
    
    console.log(indexB - b);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));