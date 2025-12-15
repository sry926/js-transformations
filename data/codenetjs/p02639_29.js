// inputに入力データ全体が入る
function Main(input) {
    input = input.split(" ");
  	for(let i=0; i < input.length; i++){
      	input[i].replace("\n","");
    	if(input[i] == 0){
        	console.log(i+1);
        }
    }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));