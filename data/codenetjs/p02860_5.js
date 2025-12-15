function Main(input) {
	input = input.split("\n");
	tmp = input[1].split(" ");
	var N = parseInt(input[0], 10);
	var S = input[1]
	if (N === 1) {
	  console.log('No');
	} else {
	  str = S.match(/.{3}/g);
	  if (str[0] === str[1]){
	    console.log('Yes');
	  } else {
	    console.log('No')
	  }
	}
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));