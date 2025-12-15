// inputに入力データ全体が入る
function Main(input) {
  var ans = 'No';
  // 1行目がinput[0], 2行目がinput[1], …に入る
  input = input.trim().split("\n");
  var [N] = input[0].split(" ").map((n) => parseInt(n));
  var data = input.slice(1)

  let cnt = 0
  for (let i = 0; i < data.length; i++) {
    let tmp = data[i].split(" ").map(n => parseInt(n))    
    if (tmp[0] == tmp[1])  {
      cnt++
      if (cnt >= 3) {
        ans = 'Yes'
        break
      }
    } else {
      cnt = 0
    }
  }

  console.log(ans);
}
// *この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
// Main(require("fs").readFileSync("./input.txt", "utf-8"));
