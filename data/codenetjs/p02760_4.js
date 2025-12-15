// inputに入力データ全体が入る
function Main(input) {
  input = input.split("\n");
  A = input.shift().split(" ");
  B = input.shift().split(" ");
  C = input.shift().split(" ");
  N = input.shift();
  BB = input.map(v=>parseInt(v));

  const check = (a, b, c, BB) => {
    return BB.find(v=>v == a) && BB.find(v=>v == b) &&BB.find(v=>v == c)
  };
  console.log(
    [
      check(A[0], A[1], A[2], BB),
      check(B[0], B[1], B[2], BB),
      check(C[0], C[1], C[2], BB),
      check(A[0], B[0], C[0], BB),
      check(A[1], B[1], C[1], BB),
      check(A[2], B[2], C[2], BB),
      check(A[0], B[1], C[2], BB),
      check(A[2], B[1], C[0], BB)
    ].some(v => v) ? 'Yes' : 'No'
  );
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
