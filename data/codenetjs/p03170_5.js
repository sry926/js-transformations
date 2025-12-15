

function Main(input) {
  input = input.split("\n");
  var N = parseInt(input[0].split(" ")[0]);
  var K = parseInt(input[0].split(" ")[1]);
  var a = input[1].split(" ").map(i => parseInt(i));
  var min = a[0];
  var max = a[N-1];
  var dp = new Array(K+1).fill(0);
  dp[0]=1;
  var tmp=0;
  for(i=1;i<K+1;i++){
    if(tmp+max+min>K||tmp+max==K){
      flag=i%2;
      break;
    }else{
      tmp+=min;
    }
  }
  if(flag==1){
    var ans="First";
  }else{
    var ans="Second";
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