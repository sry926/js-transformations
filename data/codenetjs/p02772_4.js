// inputに入力データ全体が入る
function Main(input) {
  input = input.split("\n");
  const N = input.shift()
  const A = input.map(v=>parseInt(v)).filter(v=>v % 2 == 0)

  tmp = A.filter(v=> v % 3 == 0 || v % 5 ==0)
  if(tmp.length == 0){
    console.log('DENIED')
  }else{
    console.log('APPROVED')
  }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
