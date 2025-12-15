var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  const x = parseInt(lines[0].split(' ')[0]);
  const y = parseInt(lines[0].split(' ')[1]);
  console.log(gcd(x, y));
});

function gcd (x, y) {
  var tmp;
  if (x < y) {
    tmp = x;
    x = y;
    y = tmp;
  }
  
  while (y > 0) {
    r = x % y;
    x = y;
    y = r;
  }
  
  return x;
}
