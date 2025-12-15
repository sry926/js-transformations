process.stdin.resume();
process.stdin.setEncoding('utf8'); 
var lines = [];
var reader = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});
 
reader.on('line', (line) => {
	lines.push(line);
});

reader.on('close', () => {
	"use strict"
	const N = +lines[0];
	const S = lines[1];
	const K = +lines[2];
	
	let ans = "";
	for(let l of S){ans+= l==S[K-1]?l:"*"}
	console.log(ans)
});