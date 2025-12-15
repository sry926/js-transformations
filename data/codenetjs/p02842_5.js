// inputに入力データ全体が入る
function Main(input) {
	// 1行目がinput[0], 2行目がinput[1], …に入る
  input = input.split("\n");
  
  //スペース区切り　input[0] が tmp[0], tmp[1],...
	n = input[0].split(" ");
  
  //この時点では全部文字列（数値に変換しないといけない）

	//文字列から10進数に変換するときはparseIntを使います
	var x = n*(100/108);
    var xx = Math.ceil(x);

    if(Math.floor(xx*108/100) == n){
      console.log('%d', xx);
    }else{
      console.log('%s', ':(');
    }

}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));