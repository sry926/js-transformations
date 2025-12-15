function Main(input) {
  input = input.split("\n");
  const a = parseInt(input[0], 10);
  const b = parseInt(input[1], 10);
  const h = parseInt(input[2], 10);
 
  var S = ((a + b) * h) / 2.0;
  console.log(S);
}
 
Main(require("fs").readFileSync("/dev/stdin", "utf8"));