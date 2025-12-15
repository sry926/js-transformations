'use strict'

const main = (input) => {
    const s = input.split('\n')[0].split('')
    const ans = []

    s.forEach(v => {
        if(v === '1' || v === '0'){
            ans.push(v)
        }
        if(v === 'B' && ans.length !== 0){
            ans.pop()
        }
    })

    console.log(ans.join(''))
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))