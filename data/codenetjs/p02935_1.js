// inputに入力データ全体が入る
function Main(input) {
  
   input = input.split("\n");
  var n= parseInt(input[0], 10);
 
   var tmp = input[1].split(" ");
     var b = [];
for (var i = 0; i <n ; i++){
  var r= parseInt(tmp[i], 10);
 
  b[i] = r;}
  
// console.log(a);
 
 
b.sort();
//console.log(a);
 

 //var t = a[0];
 // for ( i = 1;i < n ;i++){var t = (t+ a[i])/2;}
 
  
  var ans = 0;
  for(var i=0;i<n-1;i++){
    b[i+1] = (b[i] + b[i+1])/2;
  }
  console.log(b[n-1]);
  
  console.log(t);
                          
 
  
}
 
  
  //*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
  