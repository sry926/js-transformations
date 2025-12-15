function main(s) {
	s = s.split("\n")[0].split(" ").map(x => Number(x));
	var v = [4, 6, 9, 11];
	console.log(
		(s[0] === 2) || (s[1] === 2) ? "No" : 
			(v.some(x => x === s[0]) ? 
				(v.some(x => x === s[1]) ? "Yes" : "No") : (v.some(x => x === s[1]) ? "No" : "Yes")));
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));

