const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
console.log(input.map(function(x) {
  const arr = x.split(' ').map(Number);
  return arr[0] == 0 ? '' : function(h, w) {
    const oddLine = function(i, w) {
      return i < w ? (i % 2 == 0 ? '.' : '#').concat(arguments.callee(i + 1, w)) : '\n';
    }(0, w);
    const evenLine = function(i, w) {
      return i < w ? (i % 2 == 0 ? '#' : '.').concat(arguments.callee(i + 1, w)) : '\n';
    }(0, w);
    const board = function(i, h) {
      return i < h ? (i % 2 == 0 ? evenLine : oddLine).concat(arguments.callee(i + 1, h)) : '\n';
    }(0, h);
    return board;
  }(arr[0], arr[1]);
}).join('').trim().concat('\n'));