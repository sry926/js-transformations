"use strict";

var main = function main(input) {
  var args = input.split('\n');
  var N = args[0];
  var Aup = args[1].split(' ');
  var Adown = args[2].split(' ');
  var AupSum = [];
  var AdownSum = [];
  var upSum = 0;
  var downSum = 0;

  for (var i = 0; i < N; i++) {
    upSum += parseInt(Aup[i], 10);
    downSum += parseInt(Adown[N - i - 1], 10);
    AupSum.push(upSum);
    AdownSum.push(downSum);
  }

  var max = -1;

  for (var _i = 0; _i < N; _i++) {
    if (max < AupSum[_i] + AdownSum[N - _i - 1]) {
      max = AupSum[_i] + AdownSum[N - _i - 1];
    }
  }

  console.log(max);
};

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));