function Main(input){
var P = input.split(" ")[0];
var Q = input.split(" ")[1];
var R = input.split(" ")[2];
var A = new Number(P)+new Number(Q);
var B = new Number(Q)+new Number(R);
var C = new Number(R)+new Number(P);
if(A>=B&&C>=B){
  console.log(B);
}else if(B>=A&&C>=A){
  console.log(A);
}else if(B>=C&&A>=C){
  console.log(C);
}
}
  Main(require('fs').readFileSync('/dev/stdin','utf8'));