// inputに入力データ全体が入る
function Main(input) {
	var line = input.split("\n");
	var tmp = line[0].split(" ");
	var N = Number(tmp[0]);
	var M = Number(tmp[1]);
	var ans = Math.abs((M-2)*(N-2));
	console.log(ans);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));