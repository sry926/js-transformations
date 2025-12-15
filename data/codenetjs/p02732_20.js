"use strict";
const combi = function(n){
    if(n == 1) return 0
    else return n*(n-1)/2
}

const main = arg => {
    const input = arg.trim().split("\n");

    const N = parseInt(input[0].split(" ")[0]);
    const A = input[1].split(" ").map(n => parseInt(n));

    let m = {}
    for(let el of A){
        if(!m[el]) m[el] = 1
        else m[el]++
    }

    for(let i = 0; i<A.length; i++){
        let tmp = A[i]
        let cnt = 0
        m[tmp]--
        let keys = Object.keys(m)
        for(let key of keys){
            cnt = cnt + combi(m[key])
        }
        m[tmp]++
        console.log(cnt)
    }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
