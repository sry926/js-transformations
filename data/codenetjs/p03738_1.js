'use strict'

const main = (input) => {
    const a = input.split('\n')[0]
    const b = input.split('\n')[1]

    if(a.length > b.length){
        console.log('GREATER')
        return 
    }else if(a.length < b.length){
        console.log('LESS')
        return
    }

    const aStr = a.split('')
    const bStr = b.split('')

    for(let i = 0; i <= aStr.length; i++){
        if(aStr[i] > bStr[i]){
            console.log('GREATER')
            return
        }else if(aStr[i] < bStr[i]){
            console.log('LESS')
            return
        }
    }
    console.log('EQUAL')
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))