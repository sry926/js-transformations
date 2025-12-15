
function Main(input) {
	input = input.trim().split("\n").map(function(x) { return x.split(" ")});    
	let N = parseInt(input[0][0], 10);
	let p = input[1].map(e => parseFloat(e, 10));
	let maxUra = Math.ceil((N + 1) / 2);
	let DP = Array.from({length: maxUra}, () => 0);
	DP[0] = 1;
	for (let i = 0; i < N; i++){
		for (let j = maxUra - 1; j >= 1; j--){
			DP[j] = DP[j - 1] * (1 - p[i]) + DP[j] * p[i];
		}
		DP[0] = DP[0] * p[i];
		// console.log(DP);
	}
	let ans = 0;
	for (x of DP){
		ans += x;
	}
	console.log(ans);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));	