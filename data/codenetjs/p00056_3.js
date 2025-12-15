function prime(max){
   var arr=[];
   for(var i=0;i<=max;i++)arr[i]=i;
   arr[0]=false;
   arr[1]=false;
   var sqrt=Math.floor(Math.sqrt(max));
   for(var i=2;i<=sqrt;i++){
      if(arr[i]==false)continue;
         for(var j=i+i;j<=max;j+=i){
            arr[j]=false;
         }
   }
   var a=[];
   var b={};
   for(var i=0;i<=max;i++){
      if(arr[i]!==false)a.push(arr[i]);
      if(arr[i]!==false)b[arr[i]]=true;
   }
   return [a,b];
}
var p=prime(50000);
var pa=p[0];
var pb=p[1];
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n").map(Number);
while(true){
   var n=Arr.shift();
   if(n==0)break;
   var obj={};
   for(var i=0;i<pa.length;i++){
      if(pa[i]>n)break;
      var x=n-pa[i];
      if(pb.hasOwnProperty(x) && obj.hasOwnProperty(x+""+pa[i])==false)obj[pa[i]+""+x]=true;
   }
   console.log(Object.keys(obj).length);
}