"use strict";
function Main(input) {
    const INF = Number.MAX_SAFE_INTEGER;
    let lines = input.split("\n");
    let nums = lines.shift().split(/\s/).map((v) => v - 0);
    let N = nums[0];
    let A = nums[1];
    let B = nums[2];
    let C = nums[3];
    let Tn = []
    for (let n = 1; n <= N; n++) {
        Tn.push(lines.shift().split("\n")[0] - 0);
    }
    Tn.sort((a, b) => b - a);
    const min = (a, b, c, d) => {
        d = d || INF;
        return Math.min(a, Math.min(b, Math.min(c, d)));
    }
    const dfs = (cur, a, b, c) => {
        if (cur == N) return (min(a, b, c) > 0) ? Math.abs(a - A) + Math.abs(b - B) + Math.abs(c - C) - 30 : INF;
        const ret0 = dfs(cur + 1, a, b, c)
        const ret1 = dfs(cur + 1, a + Tn[cur], b, c) + 10
        const ret2 = dfs(cur + 1, a, b + Tn[cur], c) + 10
        const ret3 = dfs(cur + 1, a, b, c + Tn[cur]) + 10
        return min(ret0, ret1, ret2, ret3)
    }
    console.log(dfs(0, 0, 0, 0));
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
