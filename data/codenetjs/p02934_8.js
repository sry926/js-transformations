// inputに入力データ全体が入る
function Main(input) {
	// 1行目がinput[0], 2行目がinput[1], …に入る
	input = input.split("\n");
    tmp = input[0].split(" ");
    var N = Number(tmp[0])
    A = input[1].split(" ").map(Number)

    var ansinv=0
    for(var i=0; i<N; i++)
    {
        ansinv += 1/A[i]
    }
    console.log(1/ansinv)
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));