

function Main(input) {
  input = input.split("\n");
  var H = parseInt(input[0].split(" ")[0]);
  var W = parseInt(input[0].split(" ")[1]);
  var A = new Array(H+2);
  var C = new Array();
  var C1=new Array(W+2).fill(".");
  A[0]=C1;
  for(var i=0;i<H;i++){
    var tmp=input[i+1].split("");
    for(var j=0;j<W;j++){
      if(tmp[j]=="."){
        C.push([i+1,j+1]);
      }
    }
    tmp.splice(0,0,".");
    tmp.push(".");
    A[i+1]=tmp;
  }
  A[H+1]=C1;
  
  var ans=0;
  var queue=new Array();
  while(C.length>0){
    ans++;
    for(var i=C.length-1;i>=0;i--){
      if(A[C[i][0]+1][C[i][1]]=="#"||A[C[i][0]-1][C[i][1]]=="#"||A[C[i][0]][C[i][1]+1]=="#"||A[C[i][0]][C[i][1]-1]=="#"){
        queue.push(C[i]);
        C.splice(i,1);
      }
    }
    for(var i=queue.length-1;i>=0;i--){
      A[queue[i][0]][queue[i][1]]="#";
      queue.splice(i,1);
    }
  }




  console.log('%s', ans);
  return ans;
}

function debug(n){
  var input = document.getElementById("input"+n).value;
  var ans=Main(input);
  var result="WA";
  if(ans==document.getElementById("output"+n).value.split("\n")[0]){
    result="AC";
  }
  document.getElementById("result"+n).innerHTML=result;
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));