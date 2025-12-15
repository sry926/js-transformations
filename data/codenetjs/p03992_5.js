function Main(input) {
	input = input.trim();
  var mae = input.slice(0,4);
  var ato = input.slice(4,12);
  console.log(mae + " " + ato);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
