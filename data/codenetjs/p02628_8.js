'use strict';
let price = [];
let answer = 0;
// let answer;
function main(input) {
    const abc = input.replace("\n"," ").split(" ");
    const K = abc[0];
    const N = abc[1];
    for (let i = 2; price.length < K; i++) { 
        price.push(parseInt(abc[i]));
    }
    price.sort(
        function (a, b) { 
            return (a < b ? -1 : 1);
        }
    )
    for (let i = 0; i < N ; i++) { 
        answer += price[i];
    }
    console.log(answer);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))