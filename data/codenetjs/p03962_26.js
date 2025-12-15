function Main(input) {
	abc = input.split(" ").map(c => parseInt(c));
	var set = new Set(abc);
  	console.log(set.size);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));