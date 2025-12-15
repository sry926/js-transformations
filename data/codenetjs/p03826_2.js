var input = require('fs').readFileSync('/dev/stdin', 'utf8').split(/\s/g);
var a = input[0] - 0;
var b = input[1] - 0;
var c = input[2] - 0;
var d = input[3] - 0;
var x = a * b;
var y = c * d;
console.log(Math.max(x, y));