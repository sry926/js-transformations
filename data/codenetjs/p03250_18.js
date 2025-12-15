inp = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n')
l = inp.shift().split(' ')
A = l[0] * 1
B = l[1] * 1
C = l[2] * 1
s = [A, B, C].sort((a, b) => b - a)
console.log((s[0] + '' + s[1]) * 1 + s[2]) 
