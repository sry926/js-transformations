// inputに入力データ全体が入る
function Main(input) {
	var ans = 'APPROVED'
	// 1行目がinput[0], 2行目がinput[1], …に入る
	input = input.trim().split("\n");
	s = input[1].split(' ').map((n) => (parseInt(n)))
	for (i = 0; i < s.length; i++) {
		if (s[i] % 2 == 0) {
		    if (s[i] % 3 != 0 && s[i] % 5 != 0) {
				ans = 'DENIED'
					break
				}
			}
	}

	//出力
	console.log(ans)
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
// Main(require('fs').readFileSync('./input.txt', 'utf-8'));