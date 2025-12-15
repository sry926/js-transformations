'use strict'

const main = (input) => {
    const X = parseInt(input.split(' ')[0])
    const A = parseInt(input.split(' ')[1])
    const B = parseInt(input.split(' ')[2])
    const diff = A - B
    if(diff >= 0){
        console.log('delicious')
    } else if(diff < 0 && diff >= -X){
        console.log('safe')
    } else{
        console.log('dangerous')
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))