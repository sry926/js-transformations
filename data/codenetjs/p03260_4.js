'use strict'

const main = (input) => {
    const A = parseInt(input.split(' ')[0])
    const B = parseInt(input.split(' ')[1])

    if(A * B % 2 !== 0){
        console.log('Yes')
    } else {
        console.log('No')
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))