"use strict"
function main(arg) {
    var data = arg.trim().split("\n")[0].split(" ").map(Number)
    console.log(lcm(data[0], data[1]))
}

function gcd(a, b){
    if (b !== 0) {
        return gcd(b, a%b);
    }
    return a;
}

function lcm(a, b){
    return a * b / gcd(a, b);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));