function Main(input){
  input = input.split('\n');
  var N = Number(input[0].split(' ')[0]);
  var x = Number(input[0].split(' ')[1]);
  var a = input[1].split(' ').map((a)=>Number(a)).sort((a,b)=>a-b);
  var match = 0;
  var left = 0;
  for(var i=0;i<N;i++){
    if(x-a[i]>=0){
      x=x-a[i];
      match++;
    }else if(x-a[i+1]==0){
      match++;
      break;
    }else{
      break;
    }
  }
  if((x>0)&&(match!=0)){
    match--;
  }
  console.log(match);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));