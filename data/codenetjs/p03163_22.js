"use strict";
function Main(input) {
    let lines = input.split("\n");
    let nw = lines.shift().split(/\s/).map((v) => v - 0);
    let N = nw[0] - 0, W = nw[1] - 0;
    let wv = new Array(N);
    for (let n = 0; n < N; n++) {
        wv[n] = lines.shift().split(/\s/).map((v) => v - 0);
    }
    let dp = new Array(N + 1).fill(0).map(() => new Array(W + 1).fill(0));
    for (let n = 0; n < N; n++) {
        for (let sum_w = 0; sum_w <= W; ++sum_w) {
            if (sum_w - wv[n][0] >= 0) {
                dp[n + 1][sum_w] = Math.max(dp[n + 1][sum_w], dp[n][sum_w - wv[n][0]] + wv[n][1]);
            }
            dp[n + 1][sum_w] = Math.max(dp[n + 1][sum_w], dp[n][sum_w]);
        }
    }
    console.log(dp[N][W]);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));