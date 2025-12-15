function Main(input) {
	input = input.split(" ").map(Number);

	if((input[1]+input[0])%2==1){
		console.log("IMPOSSIBLE")
	}else{
		console.log((input[0]+input[1])/2)
	}

}Main(require("fs").readFileSync("/dev/stdin", "utf8"));
