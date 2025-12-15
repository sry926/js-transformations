"use strict";

const main = arg => {
    const input = arg.trim().split("\n");

    const A = parseInt(input[0].split(" ")[0]);
    const B = parseInt(input[0].split(" ")[1]);
    for(let i = 0; i<=1000; i++){
        if(Math.floor(i*0.08) == A && Math.floor(i*0.1) == B){
            console.log(i)
            return
        }
    }
    console.log('-1')
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));  