var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
var MN=Arr.shift().split(" ").map(Number);
var M=MN[0];
var N=MN[1];
var K=Arr.shift()-0;
var YX=[];
for(var i=0;i<M;i++){
   var str=(Arr.shift()).replace(/J/g,"0").replace(/O/g,"1").replace(/I/g,"2");
   var arr=str.split("").map(Number);
   YX.push(arr);
}
var dp=[];
for(var y=0;y<=M;y++){
   dp[y]=[];
   for(var x=0;x<=N;x++){
      dp[y][x]=[];
      for(var k=0;k<3;k++){
         dp[y][x][k]=0;
      }
   }
}
for(var y=1;y<=M;y++){
   for(var x=1;x<=N;x++){
      for(var k=0;k<3;k++){
            dp[y][x][k]=dp[y][x-1][k]+dp[y-1][x][k]-dp[y-1][x-1][k];
            if(YX[y-1][x-1]===k)dp[y][x][k]++;
      }
   }
}
for(var i=0;i<K;i++){
   var arr=Arr.shift().split(" ").map(Number);
   var y1=arr[0];
   var x1=arr[1];
   var y2=arr[2];
   var x2=arr[3];
   var ans=[];
   for(var k=0;k<3;k++){
      ans.push(dp[y2][x2][k]-dp[y1-1][x2][k]-dp[y2][x1-1][k]+dp[y1-1][x1-1][k]);
   }
   console.log(ans.join(" "));
}