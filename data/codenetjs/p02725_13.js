"use strict";
    
const main = arg => {
    arg = arg.trim().split("\n");
    const K = Number(arg[0].split(" ")[0]);
    const N = Number(arg[0].split(" ")[1]);
    const A = arg[1].split(" ").map(Number);
    
    let longestDistances = 0;
    
    // 区間を作る
    for(let i=0; i<N; i++) {
        let distance;
        
        if(Number(i) === N - 1) {
            distance = (K - A[i]) + A[0];
        } else {
            distance = A[Number(i) + 1] - A[i];
        }
        
        if(longestDistances < distance) {
            longestDistances = distance;
        }
    }
    
    const answer = K - longestDistances;
    
    console.log(answer);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));