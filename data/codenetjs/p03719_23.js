function main (s) {
    s=s.split(" ");
	s[0]=parseInt(s[0]);
	s[1]=parseInt(s[1]);
	s[2]=parseInt(s[2]);
	console.log((s[2]>=s[0]&&s[2]<=s[1])?"Yes\n":"No\n");
}
 
main(require('fs').readFileSync('/dev/stdin', 'utf8'));