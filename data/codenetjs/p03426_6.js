function myin(){return require("fs").readFileSync("/dev/stdin", "utf8").trim();}
function myout(t){console.log(t);}//standard output
function myerr(t){console.error(t);}//standard error
//[no]param
//0:何もしない  1:数値へ変換  2:半角SPで分割  3:改行で分割  4:半角SPで分割し、数値配列へ
//5:改行で分割し、数値配列へ  6:1文字に分割  7:1文字に分割し、数値配列へ
function myconv(i,no){switch(no){case 0:return i;case 1:return parseInt(i);case 2:return i.split(" ");case 3:return i.split("\n");case 4:return i.split(" ").map((a)=>Number(a));case 5:return i.split("\n").map((a)=>Number(a));case 6:return i.split("");case 7:return i.split("").map((a)=>Number(a));}}
function Main(input) {
  input = myconv(input,3);
  var H = myconv(input[0],4)[0];
  var W = myconv(input[0],4)[1];
  var D = myconv(input[0],4)[2];
  var list = {};
  input.shift();
  for(var i = 0; i < H; i++){
    var tmp = myconv(input[0],4);
    input.shift();
    for(var j = 0; j < W; j++){
      list[tmp[j]] = {"h" : i+1, "w" : j+1};
    }
  }
  var output = [];
  var Q = myconv(input[0],1);
  input.shift();
  for(var i = 0; i < Q; i++){
    var l = myconv(input[i],4)[0];
    var r = myconv(input[i],4)[1];
    var tmpMaryoku = 0;
    while(l != r){
       tmpMaryoku += Math.abs(list[l]["h"] - list[l+D]["h"]) + Math.abs(list[l]["w"] - list[l+D]["w"]);
      l += D;
    }
    output.push(tmpMaryoku);
  }
  myout(output.join("\n"));
}
Main(myin());