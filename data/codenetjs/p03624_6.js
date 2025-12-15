function myin(){return require("fs").readFileSync("/dev/stdin", "utf8").trim();}
function myout(text){console.log(text);}//standard output
//[no]param
//0:noConvert	1:singleNum	2:spaceList	3:newLineList	4:spaceNumList	5:newLineNumList
function myconv(i,no){switch(no){case 0:return i;case 1:return parseInt(i);case 2:return i.split(" ");case 3:return i.split("\n");case 4:return i.split(" ").map((a)=>Number(a));case 5:return i.split("\n").map((a)=>Number(a));}}

function Main(input) {
  input = myconv(input,0);
  var list = new Array(26).fill(0);
  var alpha = "abcdefghijklmnopqrstuvwxyz".split("");
  for(var i = 0; i < input.length; i++){
    list[alpha.indexOf(input.slice(i,i+1))]++;
  }
  var output = "";
  for(var i = 0; i < list.length; i++){
    if(list[i] == 0){
       output = alpha[i];
      break;
       }
  }
  if(output == ""){
     output = "None";
     }
  myout(output);
}

Main(myin());
