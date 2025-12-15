// inputに入力データ全体が入る
function Main(input) {
	// 1行目がinput[0], 2行目がinput[1], …に入る
	input = input.split("\n");
	var N = parseInt(input[0],10);
    var K = parseInt(input[1],10);
	var xs = input[2].split(" ").map((x) => parseInt(x,10));
    var diffs = xs.map((x) => {
        var kDiff = Math.abs(x - K);
        var diff = x < kDiff ? x : kDiff;
        return 2*diff;
    })
    var ans = diffs.reduce((pre, current) => {
        return pre + current;
    });
	console.log('%d',ans);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
