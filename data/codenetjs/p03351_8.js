"use strict";

function main(arg) {
    const positions = arg.split("\n")[0].split(" ").slice(0,3);
    const limit     = arg.split("\n")[0].split(" ")[3];

    
    if(Math.abs(positions[2] - positions[0]) <= limit) {
        console.log("Yes");
        return;
    }
    
    if( (Math.abs(positions[1] - positions[0]) <= limit) &&
        (Math.abs(positions[2] - positions[1]) <= limit) ) {
        console.log("Yes");
        return;
    }
    
    console.log("No");
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));