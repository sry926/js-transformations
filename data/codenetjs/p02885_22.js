function Main(input){
  inputs=input.split(" ");
  console.log(inputs[0]>inputs[1]*2?inputs[0]-inputs[1]*2:0);
}
Main(require('fs').readFileSync('/dev/stdin','utf8'));
