'use strict'

const main = (input) => {
    const arr = input.split(' ').map(v => parseInt(v))
    console.log(new Set(arr).size)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))