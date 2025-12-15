const input = require("fs").readFileSync("/dev/stdin", "utf8");
// const input = '2018\n218';

function Main(input) {
	input = input.split('\n');
  	const N = parseInt(input[0]);
    	const A = parseInt(input[1]);
  console.log(N%500 <= A?'Yes':'No');
}

// Don't edit this line!
Main(input);