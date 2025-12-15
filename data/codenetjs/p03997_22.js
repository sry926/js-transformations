function main (s) {
    s=s.split("\n");
	for(var i=0;i<3;i++){
		s[i]=parseInt(s[i]);
	}
	console.log((s[0]+s[1])*s[2]/2);
}
 
main(require('fs').readFileSync('/dev/stdin', 'utf8'));