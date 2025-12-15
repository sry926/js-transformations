"use strict";
    
const main = arg => {
    const N = parseInt(arg.split("\n")[0]);
    
    for(let i=0; i<N; i++) {
        if(Math.pow(i, 2) > N) {
            console.log(Math.pow(i-1, 2));
            return;
        }
    }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

