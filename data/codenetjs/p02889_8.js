var input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
var obj = {
  "list" : input, "index" : 0, "max" : input.length,
  "hasNext" : function(){return (this.index < this.max);},
  "next" : function(){
    if(!this.hasNext()){throw "NoSuchElementException:次に要素は無いよ";}
    var returnObj = this.list[this.index];
    this.index++;
    return returnObj;
  }
}
Main();
function next(){return obj.next();}
function nextInt(){return myconv(next(),1);}
function nextStrArray(){return myconv(next(),2);}//半角スペース分割
function nextIntArray(){return myconv(next(),4);}//半角スペース + 数値化
function nextCharArray(){return myconv(next(),6);}//1文字分割
function hasNext(){return obj.hasNext();}
function myout(t){console.log(t);}//標準出力
function myerr(t){console.error(t);}//標準エラー出力
//[no]要素の扱い。数値型
//不明値、異常時:引数そのまま返す　1:数値へ変換
//2:半角SPで分割 4:半角SPで分割し、数値配列へ
//6:1文字で分割  7:1文字で分割し、数値配列へ
//8:半角SPで結合 9:改行で結合 0:文字なしで結合
function myconv(i,no){try{switch(no){case 1:return parseInt(i);case 2:return i.split(" ");case 4:return i.split(" ").map((a)=>Number(a));case 6:return i.split("");case 7:return i.split("").map((a)=>Number(a));case 8:return i.join(" ");case 9:return i.join("\n");case 0:return i.join("");default:return i;}}catch(e){return i;}}
function Main(){
  var one = nextIntArray();
  var N = one[0];
  var M = one[1];
  var L = one[2];
  var kyori = new Array(N);
  var max = Math.pow(10,15);
  for(var i = 0; i < N; i++){
    kyori[i] = new Array(N).fill(max);
    kyori[i][i] = 0;
  }
  var list = new Array(M);
  for(var i = 0; i < M; i++){
    list[i] = nextIntArray();
    kyori[list[i][0] - 1][list[i][1] - 1] = list[i][2];
    kyori[list[i][1] - 1][list[i][0] - 1] = list[i][2];
  }
  for(var k = 0; k < N; k++){
    for(var i = 0; i < N; i++){
      for(var j = 0; j < N; j++){
        
        if(kyori[i][j] > kyori[i][k] + kyori[k][j]){
           kyori[i][j] = kyori[i][k] + kyori[k][j];
        }
      }
    }
  }
  var count = new Array(N);
  for(var i = 0; i < N; i++){
    count[i] = new Array(N).fill(max);
    for(var j = 0; j < N; j++){
      if(kyori[i][j] <= L){
        count[i][j] = 1;
      }else{
        count[i][j] = max;
      }
    }
    count[i][i] = 0;
  }
  for(var k = 0; k < N; k++){
    for(var i = 0; i < N; i++){
      for(var j = 0; j < N; j++){
        if(count[i][j] > count[i][k] + count[k][j]){
           count[i][j] = count[i][k] + count[k][j];
        }
      }
    }
  }
  //myerr(kyori);
  //myerr(count);
  var Q = nextInt();
  var output = new Array(Q);
  for(var i = 0; i < Q; i++){
    var query = nextIntArray();
    if(kyori[query[0] - 1][query[1] - 1] < max){
      output[i] = count[query[0] - 1][query[1] - 1] - 1;
    }else{
      output[i] = -1;
    }
  }
  myout(myconv(output,9));
}