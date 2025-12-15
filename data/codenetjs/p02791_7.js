// inputに入力データ全体が入る
function Main(input) {
    input = input.split("\n");
	tmp = input[1].split(" ");
  
    var count = 0;
    for (var i = 0; i < input[0]; i++) {
        var Pi = tmp[i];
        var internalCount = 0;
        for (var j = 0; j <= i; j++) {
            var Pj = tmp[j];
            if (Pi <= Pj) {
                internalCount++;
            }
        }
        if (internalCount === i+1) {
            count++;
        }
    }
    //出力
	console.log(count);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));