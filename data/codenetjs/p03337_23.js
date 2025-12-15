function Main(input) {
	// 1行目がinput[0], 2行目がinput[1], …に入る
	input=input.split("\n");
	tmp = input[0].split(" ");
	//文字列から10進数に変換するときはparseIntを使います
	var a = parseInt(tmp[0], 10);
	var b = parseInt(tmp[1], 10);
	var add=a+b;
	var sub=a-b;
	var mul=a*b;
	//出力
	if(ans === -0) ans=0;
	var ans=Math.max(add,sub,mul);
	console.log(ans);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));