function bubbleSort(A,N){
   for(var i=0;i<N;i++){
      for(var j=N-1;j>=i+1;j--){
         if(A[j][1]<A[j-1][1]){
            var memo=A[j];
            A[j]=A[j-1];
            A[j-1]=memo;
         }
      }
   }
}
function selectionSort(A,N){
   for(var i=0;i<N;i++){
      var minj=i;
      for(var j=i;j<N;j++){
         if(A[j][1]<A[minj][1])minj=j;
      }
      var memo=A[i];
      A[i]=A[minj];
      A[minj]=memo;
   }
}
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
var n=Arr.shift()-0;
var arr=Arr.shift().split(" ");
var arrA=arr.map(function(v){return v.split("");});
var arrB=arr.map(function(v){return v.split("");});
bubbleSort(arrA,n);
selectionSort(arrB,n);
console.log(arrA.join(" ").replace(/,/g,""));
console.log("Stable");
console.log(arrB.join(" ").replace(/,/g,""));
console.log((arrA.join(" ")===arrB.join(" "))?"Stable":"Not stable");