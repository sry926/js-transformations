"use strict";

function main(arg) {
    arg         = arg.split("\n").map(n=>parseInt(n));
    const train = arg.slice(0, 2);
    const bus   = arg.slice(-2);
    
    console.log(Math.min(...train) + Math.min(...bus));
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));