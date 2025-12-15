var input = require('fs').readFileSync('/dev/stdin', 'utf8').split(/\s/g);
var a = input[0] - 0;
var b = input[1] - 0;
console.log((a - 1) * (b - 1));
