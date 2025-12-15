function main(input) {
input=input.split("\n");
var a=input[0].split(" ").map((n)=>parseInt(n,10));
var b=parseInt(input[1],10);
  
var max=Math.max(a[0],a[1],a[2]);
var c=Math.pow(2,b);
var result=((a[0]+a[1]+a[2])+(max*c)-max);
  console.log(result);
    
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));