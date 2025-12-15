function main(input) {
  var N = input[0].split(" ")[0]-0;
  var s = 0;
  var n = 0;
  var dp = [0];
  for(var i=1;i<=N;i++){
    var ans = dp[i-1]+1;
    for(var s=1;Math.pow(6,s)<=i;s++){
      ans = Math.min(ans, dp[i-Math.pow(6,s)]+1);
    }
    for(var s=1;Math.pow(9,s)<=i;s++){
      ans = Math.min(ans, dp[i-Math.pow(9,s)]+1);
    }
    dp[i] = ans;
  }
  console.log(dp[N]);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8').trim().split("\n"))
