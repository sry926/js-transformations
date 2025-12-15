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
  var N = one[0];
  var M = one[1];
  if(M == 0){
     if(N == 1){
        myout(0);
     }else{
        myout(-1);
     }
    return;
  }
  var slist = new Array();
  var clist = new Array();
  while(hasNext()){
    var tmp = myconv(next(),4);
    if(slist.indexOf(tmp[0]) != -1 && clist.indexOf(tmp[1]) != -1){
       continue;
    }
    if(slist.indexOf(tmp[0]) != -1 && clist.indexOf(tmp[1]) == -1){
       myout(-1);
      return;
    }
    slist.push(tmp[0]);
    clist.push(tmp[1]);
  }
  switch(N){
    case 1:
      myout(clist[0]);
      break;
    case 2:
      if(slist.indexOf(1) == -1){
         myout(-1);
        return;
      }
      var list = new Array(2);
      for(var i = 0; i < 2; i++){
        if(slist[i] == 1){
          if(clist[i] == 0){
             myout(-1);
            return;
          }
           list[0] = clist[i];
        }else{
          list[1] = clist[i];
        }
      }
      if(list[1] == null){
         list[1] = 0;
      }
      myout(myconv(list,0));
      break;
    case 3:
      if(slist.indexOf(1) == -1){
         myout(-1);
        return;
      }
      myerr(slist);
      myerr(clist);
      var list = new Array(3);
      for(var i = 0; i <slist.length; i++){
        if(slist[i] == 1){
          if(clist[i] == 0){
             myout(-1);
            return;
          }
           list[0] = clist[i];
        }else if(slist[i] == 2){
          list[1] = clist[i];
        }else{
          list[2] = clist[i];
        }
      }
      if(list[1] == null){
         list[1] = 0;
      }
      if(list[2] == null){
         list[2] = 0;
      }
      myout(myconv(list,0));
      break;
  }
}