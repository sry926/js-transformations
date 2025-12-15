'use strict';

function Main(input) {
    let tmp = input.trim().split('\n');
    const N = Number(tmp[0]);
    const A = tmp[1].split(' ').map((v) => Number(v)).sort((a, b) => a - b);

    // A[0] === 1
    if (A[0] === 1) {
        if (A.length === 1 || A[1] !== 1) {
            console.log('1');
            return;
        } else {
            console.log('0');
            return;
        }
    }

    // A[0] >= 2
    let resultArr = new Array(N).fill(1);

    for (let i = 0; i < N; i++) {
        if (resultArr[i] === 0) continue;
        for (let j = i + 1; j < N; j++) {
            if (A[j] % A[i] === 0) {
                resultArr[j] = 0
            }
        }
    }

    // 重複のチェック
    for (let i = 0; i < N; i++) {
        if (resultArr[i] === 1) {
            if (A[i] === A[i + 1]) {
                resultArr[i] = 0
            }
        }
    }

    const result = resultArr.filter(v => v === 1).length;
    console.log(String(result));

    return;
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));