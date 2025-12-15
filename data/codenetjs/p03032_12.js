function SumArray(H){
  var sum=0;
  for(var i=0 ; i<H.length ; i++){
    sum += H[i];
  }
  return sum;
}
function Main(input){
  //パラメータ受取り
  input = input.split("\n");
  inputStr = input[0].split(" ");
  const N = Number.parseInt(inputStr[0]);
  const K = Number.parseInt(inputStr[1]);
  inputStr = input[1].split(" ");
  //引数の筒配列
  const V = inputStr.map(inputStr => Number.parseInt(inputStr));
  var ans=0;

  if(K>1 && N>1){
    //K回処理する全探索
    //左から宝石を抜くループ
    for(var i=0 ; i<=K ; i++ ){
      //右から宝石を抜くループ
      for(var j=0 ; j<=K-i ; j++){
        //安全装置
        if(i+j>V.length-1){ break;}

        //変数の初期化
        var H = [];
        //左からi個宝石を抜く
        H = H.concat(V.slice(0,i));

        //console.log(V.slice(0,i));
        
        //右からj個宝石を抜く。slice特性上0を除外する。
        if(j>0){ H = H.concat(V.slice(j*-1)); }
        //事前にマイナス値が前に来るようソートする
        H.sort();
        
        //手持ちの意思からマイナス値をK-(i+j)個戻す
        for(var r=0 ; r<K-(i+j) ; r++){
          if( H[0]<0 ){
            H.shift();
          }  
        }
        ans = Math.max(ans,SumArray(H));
      }
    }
  } else {
    //
    ans = Math.max(ans,V[0],V[V.length-1]);
  }
  console.log(ans);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));