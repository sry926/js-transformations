/*
x:doubutu 3  y:asi 8
Yes No
最小y x * 2
最大y x * 4
*/
 
function main(input){
  input = input.split(" ");
  var x = parseInt(input[0]);
  var y = parseInt(input[1]);
  if(y<=4*x && y>=2*x){console.log("Yes");}
  else if(y>4*x || y<2*x){console.log("No");}
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));