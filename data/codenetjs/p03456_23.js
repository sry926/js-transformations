// inputに入力データ全体が入る
function Main(input) {
	var line = input.split("\n");
	var tmp = line[0].split(" ");
	var str1 = tmp[0] + "";
	var str2 = tmp[1] + "";
	var str = str1 + str2;
	var num = Number(str);
	var sq = Math.sqrt(num);
	var sqint = Math.floor(sq);
	if(sq === sqint) console.log("Yes");
	else console.log("No");
	return false;
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));