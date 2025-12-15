function Main(input) {
	input = input.split("\n");
	tmp = input[0].split(" ");

    var a = tmp[0].toString();

    if(a.match(/^[A-Z]+$/)) {
        console.log( 'A' );
    } else{
        console.log( 'a' );
    }

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));