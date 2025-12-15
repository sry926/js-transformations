function Main(input) {
	input = input.split("\n");
	const r = parseInt(input[0])
	console.log(3*Math.pow(r,2))
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));