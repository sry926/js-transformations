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
 var s = lines[0].split('');
 var st = [];
 var a = 0;
 for(i=0; i<s.length; i++){
   if(st.indexOf(s[i]) !== -1){
     console.log('no');
     a++;
     break;
   }
   st.push(s[i]);
 }

 if(a == 0){
   console.log('yes');
 }
 
  
 
});