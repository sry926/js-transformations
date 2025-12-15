'use strict'

const main = arg => {
    arg = arg.trim().split("\n")
    const N = ~~arg[0];
    const T = arg[1].split(" ").map(n=>~~n);
    const M = ~~arg[2];
    const drinks = arg.slice(3, M + 3).map(n=>n.split(" ").map(l=>~~l));
    
    const baseTime = T.reduce((m,n)=>m+n);
    
    for(let i in drinks) {
        console.log((baseTime - T[drinks[i][0] - 1]) + drinks[i][1]);
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))