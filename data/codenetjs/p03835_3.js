// inputに入力データ全体が入る
function Main(input) {
	input = input.split(' ');
	var limit = input[0];
	var sumup = input[1];
	var ary = [0, 0, 0];
	var result = 0;
	for(var i = 0; i <= limit; i++){
	    for(var j = 0; j <= limit; j++){
	        for(var k = 0; k <= limit; k++){
	            if(ary[0] + ary[1] + ary[2] == sumup){
	                result++;
	            }
	            ary[2]++;
	        }
	        ary[2] = 0;
	        if(ary[0] + ary[1] + ary[2] === sumup){
	            result++;
	        }
	        ary[1]++;
	    }
	    ary[2] = 0;
	    ary[1] = 0;
	    if(ary[0] + ary[1] + ary[2] === sumup){
	        result++;
	    }
	    ary[0]++;
	}
	console.log(result);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));