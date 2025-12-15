function main (s) {
	var n=parseInt(s.split("\n")[0]);
	console.log(Math.floor(n/3));
}
 
main(require('fs').readFileSync('/dev/stdin', 'utf8'));