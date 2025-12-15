var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  var line = lines[0].split(" ").map(x => Number(x))
  console.log(Math.ceil(line[0] / line[1]))
});