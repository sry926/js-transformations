"use strict";
exports.__esModule = true;
exports.main = function (_N, K, S) {
    var sList = S.split('');
    sList[K - 1] = sList[K - 1].toLowerCase();
    return sList.join('');
};
var exec = function () {
    var input = require('fs').readFileSync('/dev/stdin', 'UTF-8');
    var lines = input.split('\n');
    var _a = lines[0].split(' ').map(function (l) { return Number(l); }), N = _a[0], K = _a[1];
    var S = lines[1];
    console.log(exports.main(N, K, S));
};
exec();
