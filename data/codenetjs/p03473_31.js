function Main(input) {
  var M = Number(input.trim());
  console.log(48-M);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
