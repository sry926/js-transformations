function Main(input){
  input = input.split('\n');
  var N = Number(input[0]);
  var a = input[1].split(' ').map((a)=>Number(a)).sort((a,b)=>b-a);
  var max = 0;
  for(var i=0;i<2*N;i++){
    if((i+1)%2==0){
      max+=a[i];
    }
  }
  console.log(max);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));