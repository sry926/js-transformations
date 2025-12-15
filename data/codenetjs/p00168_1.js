function Main(s) {
  var arr = s.split("\n");
  var dp = [1, 1, 2];
  for (var i = 3; i < 31; i++) {
    dp[i] = dp[i-3] + dp[i-2] + dp[i-1];
  }
  for (var i = 0; i < s.length - 1; i++) {
    if(arr[i] == "0") break;
    console.log(Math.ceil(dp[arr[i]] / 3650));
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
