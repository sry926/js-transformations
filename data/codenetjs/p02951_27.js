function Main(input) {
  "use strict"
	const temp = input.split(" ");

	const a = parseInt(temp.shift());
	const b = parseInt(temp.shift());
	const c = parseInt(temp.shift());
  const rest = (c + b - a > 0) ? c + b - a: 0;
  console.log(rest)
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
