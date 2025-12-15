function Main(input){
  input = input.split("\n");
  //山の数Ｎを格納する
  inputStr = input[0].split(" ");
  const N = Number.parseInt(inputStr[0]);
  //数値変換しつつ配列D_arrとしてダムに溜まった水を格納する
  inputStr = input[1].split(" ");
  var D_arr = inputStr.map(inputStr => Number.parseInt(inputStr));
  //総降水量Sを求める
  var S = 0;
  var ans = [];
  for(var i=0 ; i<N ; i++ ){
    S += D_arr[i];
    ans.push(0);
  }
  ans[0] = S;

  //総和(S=ans[0])から、他のダムに溜まった雨の量を減らす式
  //漸化式の関係上、偶数番目のダムの値×2を引いていく
  for( i=1 ; i<N ; i = i+2 ){
    ans[0] -= 2*D_arr[i];
  }
 
  //切っ掛けとなるなる山1の降水量は求まったので後は順次計算していく。
  for( var i=1 ; i<N ; i++){ 
    if(i===N-1){
      ans[i] = 2*D_arr[i] - ans[0];
    } else {
      ans[i] = 2*D_arr[i-1] - ans[i-1];
    }
  }
  //結果出力
  console.log(ans.join(" "));
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));