function Main(input) {
	const col = input.split("\n");
	const N = parseInt(col[0], 10);
	let row = col[1].split(" ");
	for(let s=0; s < row.length; s++){
		row[s] = parseInt(row[s], 10);
	}
	let tmp = row[0];
	let cnt = 0;
	if(row.length > 1){
		for(let i = 1; i < row.length; i++){
			if(tmp > row[i]){
				cnt += tmp - row[i];
			} else {
				tmp = row[i];
			}
		}
	}
	console.log(cnt);
};

Main(require("fs").readFileSync("/dev/stdin", "utf8"));