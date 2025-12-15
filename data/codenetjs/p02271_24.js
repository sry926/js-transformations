//config = { input: 'tmp', newline: '\r\n' }; // win
config = { input: '/dev/stdin', newline: '\n' }; // linux

line = require('fs').readFileSync(config.input, 'ascii')
  .split(config.newline, 4);

A = line[1].split(' ').map(Number);
m = line[3].split(' ').map(Number);

comb = [0];
for (i in A) {
  comb_i = [];
  for (j in comb) {
    if (comb.indexOf(A[i] + comb[j]) === -1) comb_i.push(A[i] + comb[j]);
  }
  comb = comb.concat(comb_i);
}

for (i in m) {
  if (comb.indexOf(m[i]) !== -1) console.log('yes');
  else console.log('no');
}