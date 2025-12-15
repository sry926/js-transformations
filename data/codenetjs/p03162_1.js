function Main(s) {
  var s = s.split("\n").map(e => e.split(" ").map(e => e*1));
  var dp = new Array(s[0] + 1);
  dp[0] = 0;
  var ibacket = new Array(s[0] + 1);
  ibacket[0] = -1; 
  for (var i = 1; i <= s[0]; i++) {
    var max = 0;
    var idx;
    for (var j = 0; j < 3; j++) {
      if ((max < s[i][j]) && (j != ibacket[i - 1])) {
        max = s[i][j];
        idx = j;
      }
    }
    ibacket[i] = idx;
    dp[i] = dp[i - 1] + max;
  }
  console.log(dp[s[0]]);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));