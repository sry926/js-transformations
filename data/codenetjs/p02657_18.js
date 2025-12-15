"use strict";

const main = arg => {
    let arr = arg.trim().split(' ')
    console.log(arr[0] * arr[1])
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));  