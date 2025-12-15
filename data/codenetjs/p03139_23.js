function main(input){
  var line = input[0].split(' ');
  var n = parseInt(line[0]);
  var a = parseInt(line[1]);
  var b = parseInt(line[2]);
  
  console.log(Math.min(a, b) + ' ' + Math.max(0, a+b -n));
}

var input = '';

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk) {
  input += chunk;
});
process.stdin.on('end', function() {
  input = input.split('\n');
  main(input);
});
