'use strict'
process.stdin.resume();
process.stdin.setEncoding('utf8');

var lines = []
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.on('line', (line) => {
  lines.push(line);
});

reader.on('close', () => {
  const s = lines[0]
  const list = s.split('').map(s => /[ACGT]/.test(s) ? 1 : 0)
  let max = 0;
  let tmp = 0;
  list.forEach(v => {
    if (v) {
      tmp += 1
    } else {
      if (tmp !== 0) {
        max = Math.max(tmp, max);
      }
      tmp = 0;
    }
  })
  console.log(Math.max(tmp, max));
});
