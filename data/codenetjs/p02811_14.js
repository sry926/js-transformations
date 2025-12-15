function Main(input) {
	var lines = input.split("\n");
	var words = lines[0].split(" ");
	var k = Number(words[0]);
	var x = Number(words[1])
	console.log(k * 500 >= x ? 'Yes' : 'No')
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));