function Main(input) {
	input = input.trim();
	//input = input.trim().split(" ");
	//input = input.trim().split("\n");
	input = input.trim().split(" ").map((a)=>Number(a));
	//input = input.trim().split("\n").map((a)=>Number(a));
  	console.log(Math.ceil((input[0] + input[1]) / 2));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
