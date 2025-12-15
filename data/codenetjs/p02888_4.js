function judge(a,b,c){
  if( a >= b+c ){
    return false;
  }
  if( b >= a+c ){
    return false;
  }
  if( c >= a+b ){
    return false;
  }
  return true;
}
function Main(input){
  input = input.split("\n");
  inputStr = input[0].split(" ");
  const N = Number.parseInt(inputStr[0]);
  inputStr = input[1].split(" ");
  var L = inputStr.map(inputStr => Number.parseInt(inputStr));
  //a,b,c其々を表す3重のループを組んで全探索
  //各結果毎に計算して結果をansに足し込む
  var ans = 0;
  for(var i=0 ; i<N-2 ; i++){
    for(var j=i+1 ; j<N-1 ; j++){
      for(var k=j+1 ; k<N ; k++){
        var a = L[i];
        var b = L[j];
        var c = L[k];
        //条件判断
        if( judge(a,b,c) === true){
          //console.log(a,b,c);
          ans++;
        }
      }
    }
  }
  console.log(ans);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));