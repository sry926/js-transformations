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
 var hw = lines[0].split(' ');
 var h = Number(hw[0]);
 var w = Number(hw[1]);
 var ans = 0;
 if((h * w) % 2 == 0){
   ans = h*w / 2;
 }else{
   ans = Math.round(h*w / 2);   
 }
 
 console.log(ans);
});