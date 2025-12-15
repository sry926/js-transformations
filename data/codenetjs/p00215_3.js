function main(){
  var i = 0;
  while(true){
    var fieldInfo = input[i].split(' ');
    var width = fieldInfo[0] - 0;//toInt
    var height = fieldInfo[1] - 0;//toInt
         
    // 0 0が入力された
    if(!width && !height){
      break;
    }
         
    var start;
    var goal;
    var elem = [[],[],[],[],[]];
 
    var c;
    for(var y = height; y--;){
      i++;//1行進める
      var ni = input[i];
      for(var x = 0; x < width; x++){// なぜか順列アクセスの方が早い
        c = ni[x];
 
        if(c === '.'){
          // ドットが一番多いはずなので、先にひっかけてしまう
        }else if(c === '1' || c === '2' || c === '3' || c === '4' || c === '5'){
          // 次に多いはずの属性を潰す
          // FIXME:判定条件は最適化できそう
          var e = elem[c - 1];
          e[e.length] = pos(x, y);
        }else if(c === 'S'){
          start = pos(x, y);
        }else{
          goal = pos(x, y);
        }
         
      }
    }
         
    var INF = 1 << 30;
    var bestElement = -1;
    var distance = INF;
             
    // 属性ごとにループ
    for (var startElem = 0; startElem < 5; startElem++) {
      // DPの初期化 DP[属性][同じ属性内の連番]
      var dp = [[],[],[],[],[]];
      for(var h = 0; h < 5; h++){
        var hLength = elem[h].length;
        dp[h].length = hLength;
        for(var hidx = 0; hidx < hLength; hidx++){
          dp[h][hidx] = INF;// ここでは配列キャッシュしないほうが早い
        }
      }
               
      // 最初に選んだパチモンから次に捕まえられる属性番号
      var first = (startElem + 1) % 5;
         
      var firstLength = elem[first].length;
      var dpf = dp[first];
      var elemf = elem[first];
      for (var j = 0; j < firstLength; j++) {
        // s→e1を計算
        dpf[j] = dist(start, elemf[j]);
      }
               
      // s->1->2->3->4->g
      // なので、ループは間の-> * 3分まわす
      for (var e = 0; e < 3; e++) {
        // ex->e(x+1)
        var now = (first + e) % 5;
        var next = (now + 1) % 5;
        var dpnw = dp[now];
        var dpnx = dp[next];
        var elnw = elem[now];
        var elnx = elem[next];
        var nowLength = elnw.length;
        var nextLength = elnx.length;
        for (var j = 0; j < nowLength; j++) {
          for (var k = 0; k < nextLength; k++) {
            dpnx[k] = fmin(
              dpnx[k],
              dpnw[j] + 
                  dist(elnw[j], elnx[k]));
          }
        }
      }
               
      var last = (first + 3) % 5;
      var lastLength = elem[last].length;
      var dpl = dp[last];
      var ell = elem[last];
      for (var j = 0; j < lastLength; j++) {
        // e4->g
        var d = dpl[j] + 
                    dist(ell[j], goal);
                 
        if (d < distance) {
          distance = d;
          bestElement = startElem + 1;
        }
                 
      }
               
    }
             
    if (distance == INF) {
      console.log("NA");
    } else {
      console.log(bestElement + " " + distance);
    }
         
    i++;
  }
           
         
}
         
function dist(from, to){
  // x座標とy座標の切り出し(11ビット右シフトでxを、2047(下位10ビット1)とのAND演算でyを取り出す)
  return fabs((from >> 11) - (to >> 11)) + fabs((from & 2047) - (to & 2047));
}
         
function fmin(a, b){
  // ビット演算で高速化
  var t = a - b;
 return b + (t & (t >> 31));
}
         
function pos(a, b){
  // 2^10 = 1024なので、下位10ビットでy座標を、上位ビットでx座標を表す
  return (a << 11) + b;
}
        
function fabs(a){
 // ビット演算で高速化
 var mask = a >> 31;
 return (a ^ mask) - mask;
}
         
var
input = '';
         
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk) {
  input += chunk;
});
process.stdin.on('end', function() {
  input = input.split('\n');
  main();
});