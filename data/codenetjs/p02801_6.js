/// inputに入力データ全体が入る
function Main(input) {
	// 1行目がinput[0], 2行目がinput[1], …に入る
	//input = input.split("\n");
	c=input.trim().split("\n");
    var al='abcdefghijklmnopqrstuvwxyz';
    var result = al.indexOf( c );
    var nxt = al.substr( result+1, 1 );
    console.log(nxt);
	
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));