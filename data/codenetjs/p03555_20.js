'use strict'

const main = (input) => {
    input = input.split('\n')
    const a = input[0]
    const b = input[1]
    if(a === b.split('').reverse().join('')){
        console.log('YES')
    }else{
        console.log('NO')
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))