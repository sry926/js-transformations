function Main(input) {
	input = input.trim().split("\n").map(function(x) { return x.split(" ")});
	let N = parseInt(input[0][0], 10);
	let v_A = input[1].map(e => parseInt(e, 10));

	let v_checkPlus = [];
	let v_checkMinus = [];

	for (let i = 1; i < N; i++){
		if (i - v_A[0] - v_A[i] < 0) {
			if (v_checkMinus[v_A[0] - i + v_A[i]] == undefined) v_checkMinus[v_A[0] - i + v_A[i]] = 1;
			else v_checkMinus[v_A[0] - i + v_A[i]] ++;
		} else {
			if (v_checkPlus[i - v_A[0] - v_A[i]] == undefined) v_checkPlus[i - v_A[0] - v_A[i]] = 1;
			else v_checkPlus[i - v_A[0] - v_A[i]] ++;
		}
	}

	let tmp = 0;
	let ans = 0;
	for (let i = 1; i < N; i ++){
		// console.log(tmp);
		// console.log(v_checkMinus, v_checkPlus);

		if (tmp <= 0){
			ans += (v_checkPlus[tmp * -1] | 0);
		} else {
			ans += (v_checkMinus[tmp] | 0);
		}

		// console.log("ans", ans);

		if (i - v_A[0] - v_A[i] < 0) {
			v_checkMinus[v_A[0] - i + v_A[i]] --;
		} else {
			v_checkPlus[i - v_A[0] - v_A[i]] --;
		}

		tmp += (v_A[i - 1] - v_A[i] - 1);

		
	}
	
	console.log(ans);

}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
