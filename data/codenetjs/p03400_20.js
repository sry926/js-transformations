function Main(s) {
	const n = parseInt(s[0]);
	s[1] = s[1].split(" ").map(a => parseInt(a));
	const d = s[1][0];
	var x = s[1][1];
	var a = [];
	for(var i = 0; i < n; i++){
		x += Math.floor((d - 1) / parseInt(s[i+2])) + 1;
	}
	console.log(x);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").split("\n"));