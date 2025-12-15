function Main(input) {
	input = input.trim().split("\n").map(function(x) { return x.split(" ")});
    let K = parseInt(input[0][0], 10);
    let ans = -1;
    let candidate = 7;
	for (let i = 1; i <= K; i ++){
        if (candidate % K === 0){
            ans = i;
            break;
        } else {
            candidate = candidate * 10 + 7;
            candidate %= K;
        }

    }	
	console.log(ans);
	
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
