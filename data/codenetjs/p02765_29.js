// inputに入力データ全体が入る
function Main(input) {	
	var inputs = input.split(" ");
	
	var N = parseInt(inputs[0]);//sanka ninzu
	var R = parseInt(inputs[1]);//hyouji rating
  	
  	if(N <= 10)
  		R = R + 100*(10-N);
	//出力
	console.log(R);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));