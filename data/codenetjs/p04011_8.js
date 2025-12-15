'use strict'

const main = (input) => {
    input = input.split('\n').map(v => parseInt(v))
    const N = input[0]
    const K = input[1]
    const X = input[2]
    const Y = input[3]
    if(N <= K){
        console.log(N * X)
    }else{
        const over = N - K
        console.log(K * X + Y * over)
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))