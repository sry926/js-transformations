var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
var L=Arr.shift();
var obj={};
for(var i=0;i<L;i++){
   var arr=Arr[i].split(" ");
   if(arr[0]=="insert")obj[arr[1]]=true;
   else console.log(obj.hasOwnProperty(arr[1]) ? "yes":"no");
}