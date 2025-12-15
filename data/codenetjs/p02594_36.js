var stdin = require("fs").readFileSync("/dev/stdin", "utf8");

var b = 'Yes'
var c = 'No'

var a =stdin.split("\n")
if (a >= 30){
  console.log(b);
}else{
  console.log(c);
}
