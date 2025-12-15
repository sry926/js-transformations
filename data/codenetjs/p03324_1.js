'use strict'

// 与えられた数字が100で何回割り切れるか
const calc = (num) => {
    let ret = 0
    while(num % 100 === 0){
        num /= 100
        ret++
    }
    return ret
}

const main = (input) => {
    input = input.split('\n')[0].split(' ').map(i => parseInt(i))
    const D = input[0]
    const N = input[1]
    let cnt = 0
    let val = 0
    while(cnt < N){
        val++
        if(calc(val) === D) cnt++
    }
    console.log(val)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))