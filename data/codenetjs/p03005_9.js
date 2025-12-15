function Main(input) {
  input = input.trim()
  input = input.split(" ");
  if(input[1]!=1) console.log(input[0]-input[1]);
  else console.log(0);
}Main(require("fs").readFileSync("/dev/stdin", "utf8"));
