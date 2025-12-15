'use strict'
const main = arg => {
	const input = arg.trim().split("\n");
	let N = Number(input[0])
	let K = Number(input[1])
	let X = Number(input[2])
	let Y = Number(input[3])
	let out = 0
	for (let i = 1 ; i <= N ; i++) {
		if(K + 1 <= i ) {
			out += Y
		} else {
			out += X
		}
	}
	console.log(out)
}   
main(require('fs').readFileSync('/dev/stdin', 'utf8'));