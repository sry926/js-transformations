function main (s) {
	s=s.split(" ");
	if(s[0][0]<s[1][0])console.log("<\n");
	else if(s[0][0]>s[1][0])console.log(">\n");
	else console.log("=\n");
}
 
main(require('fs').readFileSync('/dev/stdin', 'utf8'));