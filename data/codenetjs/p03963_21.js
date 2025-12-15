'use strict'

function Main(input) {
    const tmp = input.split('\n')[0].split(' ');
    const N = Number(tmp[0]);
    const K = Number(tmp[1]);
    
    let result = K;

    if (N === 1) {
        console.log(result);
        return;
    }

    for (let i = 0; i < (N - 1); i++) {
        result *= (K - 1);
    }
    console.log(result);
    return;

}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
