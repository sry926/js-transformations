var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var result=1;
for(var i=1;i<=input;i++){
 result=result*i;
}
console.log(result);