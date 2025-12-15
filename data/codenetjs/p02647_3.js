var a = [];
var tmpA = [];
var zeroA = [];

function doLight() {
	tmpA = JSON.parse(JSON.stringify(zeroA));
	for (var i = 0; i < a.length; i++) {
		for (var j = i - a[i]; j <= i + a[i]; j++) {
			if (0 <= j && j < a.length) {
				tmpA[j] += 1;
			}
		}
	}
	a = JSON.parse(JSON.stringify(tmpA));
}

// inputに入力データ全体が入る
function Main(input) {
	// 1行目がinput[0], 2行目がinput[1], …に入る
	const inputLines = input.split("\n");
	const line0 = inputLines[0];
	const line0vars = line0.split(" ");
	const line1 = inputLines[1];
	const line1vars = line1.split(" ");

	const n = parseInt(line0vars[0], 10);
	const k = parseInt(line0vars[1], 10);

	for (var i = 0; i < n; i++) {
		const a1 = parseInt(line1vars[i], 10);
		a.push(a1);
		tmpA.push(a1);
		zeroA.push(0);
	}

	for (var i = 0; i < k; i++) {
		doLight();
	}

	console.log(a.join(" "));

	// tmp = input[1].split(" ");
	// //文字列から10進数に変換するときはparseIntを使います
	// var a = parseInt(input[0], 10);
	// var b = parseInt(tmp[0], 10);
	// var c = parseInt(tmp[1], 10);
	// var s = input[2];

	//出力
	// console.log('%d %s',a+b+c,s);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));

// node index.js
// 1
// 2 3
// test
// (Ctrl + D)
