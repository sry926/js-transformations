var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// input
reader.on('line', function(line) {
  var inputs = line.split(' ')
  var month = parseInt(inputs[0])
  var day = parseInt(inputs[1])
  var min = Math.min(month, day)
  console.log(min == month ? month : month - 1)
});