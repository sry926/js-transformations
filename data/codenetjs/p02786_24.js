process.stdin.resume();
process.stdin.setEncoding('utf8');

const reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on('line', (line) => {
  let h = BigInt(line);
  let n = BigInt(0);

  for (let i = 0; i < 50; i++) {
    if (h === BigInt(1)) break;
    h /= BigInt(2);
    n += 1n;
  }

  const result = 2n ** (n + 1n) - 1n;

  const answer = String(result);
  console.log(answer);

  process.exit(0);
});
