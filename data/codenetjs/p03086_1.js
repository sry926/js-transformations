// inputに入力データ全体が入る
function Main(input) {
    input = input.split("\n");
    var s = input[0];
    var cnt = 0;
    var max = 0;
    for (var i = 0; i < s.length; i++) {
        var c = s[i];
        if (isACGT(c)) {
            cnt += 1;
        } else {
	        max = Math.max(max, cnt);	
	        cnt = 0;
        }
    }
    console.log(max);
}

function isACGT(input) {
    switch(input) {
        case 'A':
        case 'T':
        case 'C':
        case 'G': 
            return true;
        default: {
            return false;
        }
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));