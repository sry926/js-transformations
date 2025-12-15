'use strict';

function Main(input) {
    let S = input.trim().split(' ');
    const A = BigInt(S[0]);
    const B = BigInt(Math.floor(S[1] * 100));
    // console.log(S)
    // console.log(A, B)

    const result = A * B / 100n

    console.log(String(result));

}
Main(require('fs').readFileSync('/dev/stdin', 'utf8'));