process.stdin.resume();
process.stdin.setEncoding('utf8');
 
// inputに入力データ全体が入る
function Main(input) {
  // 1行目がline1, 2行目がline2, …に入る
  var arg   = input.split("\n");
  var line0 = arg[0].split(" ");
  //var line1 = arg[1].split(" ");
  //var line2 = tmp[2].split(" ");
  //var line3 = tmp[3].split(" ");

  var input1 = Number(line0[0]);
  var input2 = Number(line0[1]);
  var input3 = Number(line0[2]);
  var n = input1;
  var a = input2;
  var b = input3;

  var ans = "initial_answer";
  var f_max = 0;
  //console.log( "[INPUT] "+ n +" "+ a +" "+ b + "");
  
  // LOGIC //
  ans = 0;
  
  if(a*n < b)ans = a*n;
  else ans = b;

  console.log(ans);


  


}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
