function Main(input) {
	input = input.split("\n");
	var N = input[0].split(" ").map(a => parseInt(a));
	var K = N[1];
	N = N[0];
	var x = [], y = [], c = [];
	for(var i = 0; i < N; i++){
		x[i] = input[i+1].split(" ");
		y[i] = parseInt(x[i][1]);
		c[i] = (x[i][2] === "W" ? 0 : 1);
		x[i] = parseInt(x[i][0]);
	}
	var ans = 0;
	for(i = 0; i < K*2; i++){
		for(var j = 0; j < K*2; j++){
			var now = 0;
			for(var k = 0; k < N; k++){
				if((Math.floor((x[k] + i) / K) % 2) ^ (Math.floor((y[k] + j) / K) % 2) === c[k]) now++;
			}
			if(ans < now)ans = now;
		}
	}
	console.log(ans);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));