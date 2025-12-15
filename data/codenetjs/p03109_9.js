'use strict'

function main(input) {
    let date = input.split('/').map(v => ~~v)
    
    if (date[1] > 4) {
        console.log('TBD')
    }
    else {
        console.log('Heisei')
    }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'))