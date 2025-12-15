function Main(input) {
	input = input.split("\n");
	const input1 = input[0].split(" ")
	const M = parseInt(input1[0])
	const D = parseInt(input1[1])
	const s = []
	for(i=1; i <= D; i++){
		d1 = i % 10;
		d10 = Math.floor(i / 10);
		if(d1 >= 2 && d10 >= 2){
			s.push(d1 * d10)
		}
	}
  	
	const res = s.filter(d => d <= M)
	console.log(res.length)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));