'use strict'

const main = (input) => {
    const al = 'abcdefghijklmnopqrstuvwxyz'
    const S = input.split('\n')[0]
    const alArr = al.split('')
    const SArr = [...new Set(S.split('').sort())]
    for(let i = 0; i <= alArr.length; i++){
        if(alArr[i] !== SArr[i]){
            console.log(alArr[i])
            return
        }
    }
    console.log('None')
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))