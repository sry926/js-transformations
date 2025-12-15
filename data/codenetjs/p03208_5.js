"use strict";

function Main(input) {
    input = input.split("\n");
    let temp = input[0].split(" ").map(x => parseInt(x));
    let N = temp[0];
    let K = temp[1];
    
    let h = input.slice(1, N+1).map(x => parseInt(x));
    h.sort((n,m)=> n-m);

    let min = Math.pow(10, 10);
    
    for( let  i=0; i<(N-K)+1 ; i++) {
        let tempMin = h[i+(K-1)] - h[i];
        min = Math.min(min, tempMin);
    }
    
    console.log(min);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));