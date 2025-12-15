function Main(input) {
	input = input.split("\n");
    a = input[1].split(" ");

    const N = parseInt(input[0]);
    var n = 0;

    for (let i=1; i<(N+1) ; i++) {

        if(i%2 == 1) {

            var tmp = parseInt(a[i-1]);

            if (tmp%2 == 1) {

                n++;

            }
        }
    }

    console.log( '%d', n);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
