'use strict';

const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const NM = input[0].trim().split(' ');
const N = parseInt(NM[0]);
const M = parseInt(NM[1]);

console.log(
    (M <= 2 * N) ?
    Math.floor(M / 2) :
    Math.floor((2 * N + M) / 4)
);