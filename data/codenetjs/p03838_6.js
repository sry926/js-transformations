var input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
var obj = {
  "list" : input,
  "index" : 0,
  "max" : input.length,
  "next" : function(){
    if(!this.hasNext()){throw "NoSuchElementException:次に要素は無いよ";}
    var returnObj = this.list[this.index];
    this.index++;
    return returnObj;
  },
  "hasNext" : function(){return (this.index < this.max);}
}
Main();
function next(){return obj.next();}
function hasNext(){return obj.hasNext();}
function myout(t){console.log(t);}//standard output
function myerr(t){console.error(t);}//standard error
//[no]要素の扱い。数値型
//不明値、異常時:引数そのまま返す　1:数値へ変換
//2:半角SPで分割 4:半角SPで分割し、数値配列へ
//6:1文字で分割  7:1文字で分割し、数値配列へ
//8:半角SPで結合 9:改行で結合 0:文字なしで結合
function myconv(i,no){try{switch(no){case 1:return parseInt(i);case 2:return i.split(" ");case 4:return i.split(" ").map((a)=>Number(a));case 6:return i.split("");case 7:return i.split("").map((a)=>Number(a));case 8:return i.join(" ");case 9:return i.join("\n");case 0:return i.join("");default:return i;}}catch(e){return i;}}
function Main(){
  var one = myconv(next(),4);
  var x = one[0];
  var y = one[1];
  var absX = Math.abs(x);
  var absY = Math.abs(y);
  if(x < 0 && y < 0){
     if(x > y){
        myout(absY - absX + 2);
     }else{
        myout(absX - absY);
     }
  }else if(x < 0 && y >= 0){
     if(absX > y){
        myout(absX - absY);
     }else{
        myout(absY - absX + 1);
     }
  }else if(y < 0 && x >= 0){
     if(absY > x){
        myout(absY - absX + 1);
     }else{
        myout(absX - absY + 1);
     }
  }else{
    if(y >= x){
       myout(y - x);
    }else{
       if(y == 0){
          myout(x - y + 1);
       }else{
          myout(x - y + 2);
       }
    }
  }
}