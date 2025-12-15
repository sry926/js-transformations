'use strict'

const main = (input) => {
    const str = input.split('\n')[0].split(' ').map(v => v.split(''))
    if(str[0][str[0].length - 1] === str[1][0] && str[1][str[1].length - 1] === str[2][0]){
        console.log('YES')
    }else{
        console.log('NO')
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))