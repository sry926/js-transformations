"use strict";
    
const main = arg => {
    arg = arg.trim().split("\n");
    const N = parseInt(arg[0].split(" ")[0]);
    const K = parseInt(arg[0].split(" ")[1]);
    const A = arg[1].split(" ").map(n=>parseInt(n));
    
    let oneIndex = A.indexOf(1);

    if(N <= K) {
        console.log(1);
        return;
    }
    
    const head = Math.ceil(oneIndex / (K - 1));
    
    if(K > oneIndex + 1) {
        oneIndex += (K - (oneIndex + 1));
    }
    
    const tail = Math.ceil((N - (oneIndex + 1)) / (K - 1));
    
    // console.log(head);
    // console.log(tail);

    console.log(head + tail);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));