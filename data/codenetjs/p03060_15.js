"use strict";
    
const main = arg => {
    arg = arg.trim().split("\n");
    const N = ~~arg[0];
    const V = arg[1].split(" ").map(n=>~~n);
    const C = arg[2].split(" ").map(n=>~~n);
    
    let answer = 0;
    
    for(let i=0; i<N; i++) {
        if(V[i] - C[i] < 0) {
            
        } else {
            answer += V[i] - C[i];
        }
    }
    
    console.log(answer);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));