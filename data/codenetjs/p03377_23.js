function Main(input) {
  input = input.trim()
 input = input.split(" ").map(Number);
if(input[0]<=input[2]&&input[0]+input[1]>=input[2]){
  console.log("YES")
}else{
  console.log("NO")
}
}Main(require("fs").readFileSync("/dev/stdin", "utf8"));