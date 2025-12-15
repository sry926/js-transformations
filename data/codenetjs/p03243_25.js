'use strict'

function main(arg) {
    let N = String(arg).split("").map(n=>parseInt(n));
    let answer;


    if( N[1] <= N[0] && N[2] <= N[0] ) {
        answer = String(N[0]) + String(N[0]) + String(N[0]);
        console.log(answer);
    } else {
        answer =  String(N[0]+1) + String(N[0]+1) + String(N[0]+1);
        console.log(answer);
    }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));