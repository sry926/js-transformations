

function Main(input) {
  input = input.split("\n");
  var N = parseInt(input[0].split(" ")[0]);
  var W = parseInt(input[0].split(" ")[1]);
  var G = new Array(N);
  for(var i=0;i<N;i++){
    tmp=input[i+1].split(" ");
    var w = parseInt(tmp[0]);
    var v = parseInt(tmp[1]);
    G[i]=[w,v,v/w];
  }
  G.sort(function(a,b){
    if(a[2]-b[2]>0) return -1;
    if(a[2]-b[2]<0) return 1;
    if(a[0]-b[0]<0) return -1;
    if(a[0]-b[0]>0) return 1;
  });
  var itemp=0;
  var ans=0;
  var waight=0;
  var D = new Array();
  for(var i=0;i<N;i++){
    waight+=G[i][0];
    if(waight>W){
      waight-=G[i][0];
      itemp=i;
      break;
    }
    ans+=G[i][1];
    D.push(G[i]);
  }
  if(D.length!=0){
    D.sort(function(a,b){return a[0]-b[0]});
    for(var i=itemp;i<N;i++){
      if(waight+G[i][0]<=W){
        ans=ans+G[i][1];
        waight=waight+G[i][0];
        D.push(G[i]);
        D.sort(function(a,b){return a[0]-b[0]});
      }else if(waight+G[i][0]-D[0][0]<=W&&D[0][1]<G[i][1]){
        ans=ans+G[i][1]-D[0][1];
        waight=waight+G[i][0]-D[0][0];
        D.shift();
        D.push(G[i]);
        D.sort(function(a,b){return a[0]-b[0]});
      }
    }
  }

  console.log('%s', ans);
  return ans;
}
// "実行する"ボタンを押した時に実行される関数 (デバッグ用)
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