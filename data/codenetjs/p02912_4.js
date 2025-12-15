function ArrayShift(A){
  //配列Aの左端(最も大きな値)を返す。その際に配列から削除する
  return A.shift();
}
function ArrayPush(A,val){
  var posi = A.length;
  //配列Aにvalを挿入する。左端から降順になる様に。
  for(var i=0 ; i<A.length ; i++){

    //console.log("val=",val);
    //console.log("A[i]=",A[i]);
    
    if(A[i] > val){
      //次の要素へ移動
    } else if(A[i] === val) {
      //そこに挿入
      posi = i+1;
      break;
    } else {
      //一個前に挿入
      posi = i;
      break;
    }
  }
  //console.log("posi=",posi);
  //console.log("i=",i);
  Array.prototype.splice.apply(A,[posi,0].concat(val));
}
function Main(input){
  input = input.split("\n");
  inputStr = input[0].split(" ");
  const N = Number.parseInt(inputStr[0]);
  const M = Number.parseInt(inputStr[1]);
  //品目情報を配列Aに格納する
  inputStr = input[1].split(" ");
  var A = inputStr.map( inputStr => Number.parseInt(inputStr));
  A.sort(function(a,b){
        if( a > b ) return -1;
        if( a < b ) return 1;
        return 0;
  });
  //チケット枚数分ループ(一番大きな値を値切る方針)
  var i = 0; //チケットカウンタ
  if(N>1){
    //console.log("初期",A);
    while(i<M){
      var tmp = ArrayShift(A);    
      ArrayPush(A,Math.floor(tmp/2));
      //console.log("処理",i+1,"回目",A);
      i++;
    }
  } else {
    A[0] = Math.floor(A[0]/Math.pow(2,M));
  }
  //合計金額を標準出力
  console.log(A.reduce(function(total, data){return total + data}));
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
