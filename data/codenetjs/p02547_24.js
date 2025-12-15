"use strict";
    
const main = arg => {
    arg = arg.trim().split("\n");
    const N = parseInt(arg[0].split(" ")[0]);
    const D = arg.slice(1, N + 1).map(n=>n.split(" ").map(l=>parseInt(l)));
    
    let max = 0;
    let temp = 0;
    
    for(let i in D) {
        if(D[i][0] === D[i][1]) {
            temp++;
        } else {
            temp = 0;
        }
        
        max = Math.max(max, temp);
    }
    
    console.log(max >= 3 ? "Yes" : "No");
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));