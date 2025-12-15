function Main(input) {

  var input = input.split("\n")

  var arya = input[0].split(" ").map(val => parseInt(val, 10)).slice(0, 2);
  var a = arya[0];
  var p = arya[1];
  var result = ((a * 3) + p) / 2

  console.log(Math.floor(result));
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));