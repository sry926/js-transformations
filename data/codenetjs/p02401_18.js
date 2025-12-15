function Main(input){
	input=input.trim().split("\n");
	let line, a, b, op, ans;
	for (let i = 0; i < input.length -1; i++){
		line = input[i].split(" ");
		a = parseInt(line[0],10);
		b = parseInt(line[2],10);
		op = line[1];
		if (op == '+') {
			ans = a + b;
		} else if (op == '-') {
			ans = a - b;
		} else if (op == '*') {
			ans = a * b ;
		} else if (op == '/') {
			ans = a / b | 0;
		}
		console.log(ans);
	}
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
