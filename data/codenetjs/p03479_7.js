// inputに入力データ全体が入る
function Main(input) {
	var line = input.split("\n");
	var tmp = line[0].split(" ");
	var lower = Number(tmp[0]);
	var upper = Number(tmp[1]);

	if(upper > 1000000000){
		upper = upper + "";
		lower = "000000000000000" + lower + "";
		var lessenUpper = upper.slice(0,-8) + "." + upper.slice(-8);
		var lessenLower = lower.slice(0,-8) + "." + lower.slice(-8);
		upper = Number(lessenUpper);
		lower = Number(lessenLower);
	}
	// ans is x which satisfies lower * 2^(x-1) = upper
	var ans = Math.floor(Math.log2(upper/lower)) + 1;
	console.log(ans);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));