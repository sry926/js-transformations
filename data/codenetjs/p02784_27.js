function Main (input) {
  input = input.split("\n");
  var ts = input[0].split(" ");
  const H = parseInt(ts[0], 10);
  const N = parseInt(ts[1], 10);
  const A = input[1].split(" ").map(inp => parseInt(inp, 10));
  var ans_1 = 0;
  for (var i_1 of A) {
    ans_1 += i_1;
  }
  ans_1 >= H ? console.log("Yes") : console.log("No");
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));