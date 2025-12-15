'use strict';

function Main(input) {
    const N = Number(input.trim().split('\n')[0]);

    let divisors = new Array(N + 1).fill(0);

    for (let i = 1; i <= N; i++) {
        for (let j = i; j <= N; j += i) {
            divisors[j]++;
        }
    }

    // console.log(divisors);
    let result = divisors.reduce((sum, v, i) => {
        const bigV = BigInt(v);
        const bigI = BigInt(i);
        return sum + bigV * bigI;
    }, 0n);

    console.log(String(result));

    return;
}
Main(require('fs').readFileSync('/dev/stdin', 'utf8'));