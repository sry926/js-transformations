function myin(){return require("fs").readFileSync("/dev/stdin", "utf8").trim();}
//function myout(t){print(t);}//standard output
function myout(t){console.log(t);}//standard output
function myerr(t){console.err(t);}//standard error
//[no]param
//0:何もしない  1:数値へ変換  2:半角SPで分割  3:改行で分割  4:半角SPで分割し、数値配列へ
//5:改行で分割し、数値配列へ  6:1文字に分割  7:1文字に分割し、数値配列へ
function myconv(i,no){switch(no){case 0:return i;case 1:return parseInt(i);case 2:return i.split(" ");case 3:return i.split("\n");case 4:return i.split(" ").map((a)=>Number(a));case 5:return i.split("\n").map((a)=>Number(a));case 6:return i.split("");case 7:return i.split("").map((a)=>Number(a));}}
 
function Main(input) {
  input = myconv(input,3);
  var a = input[0];
  var b = input[1];
  if(a == b){
     myout("EQUAL");
     }else if(a.length > b.length){
     myout("GREATER");
  }else if(a.length < b.length){
           myout("LESS");
	}else{
     for(var i = 0; i < a.length; i++){
       var da = myconv(a.slice(i,i+1),1);
       var db = myconv(b.slice(i,i+1),1);
       if(da > db){
          myout("GREATER");
         return;
          }else if(da < db){
         myout("LESS");
            return;
       }
     }
	}
}
 
Main(myin());