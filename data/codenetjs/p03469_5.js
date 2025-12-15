function main (s) {
	s=s.split("");
	s[3]="8";
	s=s.join("");
	console.log(s);
}
 
main(require('fs').readFileSync('/dev/stdin', 'utf8'));