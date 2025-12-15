function Main(input) {
  input = input.trim().split('\n');
  H = Number(input[0].split(' ')[0]);
  M = input.slice(1).map(v => v.split(' ').map(Number));

  dp = Array(H + 1).fill(Infinity);
  dp[0] = 0;
  M.forEach(item => {
    for (i = 0; i <= H; i=(i+1)|0) {
      targetPointIndex = Math.min(i + item[0], H);
      dp[targetPointIndex] = Math.min(dp[targetPointIndex], dp[i] + item[1]);
    }
  });
  console.log(dp[H]);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));