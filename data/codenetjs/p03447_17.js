const fs = require('fs');

const input = Buffer.alloc(0x10000);
fs.readSync(0, input, 0, 0x10000);

const [X, A, B] = input.toString().split('\n').map((n) => parseInt(n));
console.log((X - A) % B);
