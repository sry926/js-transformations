var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
var arr0=Arr[0].split(" ").map(Number);
var n=arr0[0];
var m=arr0[1];
var l=arr0[2];
Arr.shift();
var nm=Arr.slice(0,n);
var ml=Arr.slice(n,Arr.length);

var ML=[]
for(var i=0;i<m;i++){
   var arr=(ml[i]).split(" ").map(Number);
   ML.push([]);
   for(var j=0;j<l;j++){
      ML[i][j]=arr[j];
   }
}

for(var i=0;i<n;i++){
   var NM=nm[i].split(" ").map(Number);
   var arr=[];
   for(var j=0;j<l;j++){
      var sum=0;
      for(var k=0;k<m;k++)sum+=NM[k]*ML[k][j];  
      arr.push(sum);    
   }
   console.log(arr.join(" "));
}