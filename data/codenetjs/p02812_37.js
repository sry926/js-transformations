Main(myin());
function myin(){return require("fs").readFileSync("/dev/stdin", "utf8").trim();}
function myout(t){console.log(t);}//standard output
function myerr(t){console.error(t);}//standard error
//[no]param
//不明値:何もしない  1:数値へ変換  2:半角SPで分割  3:改行で分割  4:半角SPで分割し、数値配列へ
//5:改行で分割し、数値配列へ  6:1文字に分割  7:1文字に分割し、数値配列へ
function myconv(i,no){switch(no){case 1:return parseInt(i);case 2:return i.split(" ");case 3:return i.split("\n");case 4:return i.split(" ").map((a)=>Number(a));case 5:return i.split("\n").map((a)=>Number(a));case 6:return i.split("");case 7:return i.split("").map((a)=>Number(a));default:return i;}}
function Main(input) {
  input = myconv(input,3);
  var N = myconv(input[0],1);
  var list = myconv(input[1],6);
  var output = 0;
  for(var i = 0; i < N-2; i++){
    if(list[i] == "A" && list[i+1] == "B" && list[i+2] == "C"){
       output++;
       }
  }
  myout(output);
}