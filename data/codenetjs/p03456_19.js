function Main(input) {
	const inputStrings = input.split(' ');
	const verifyNum = parseInt(inputStrings[0] + inputStrings[1]);
	
	let answer = 'No';
	for(let i = 1; i <= 100100; i++){
		if((i * i) === verifyNum){
			answer = 'Yes';
			break;
		}
	}
	console.log(answer);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));