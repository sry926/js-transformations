function Main(input) {
  input = input.trim()
  input = input.split(" ");
if(input[1].slice( 0,1 )==input[0].slice( -1 )&&input[2].slice( 0,1 )==input[1].slice( -1 )){
  console.log("YES");
}else{
  console.log("NO");
}}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
