"use strict";
function Main(input) {
    let lines = input.split("\n");
    let nm = lines.shift().split(/\s/).map((v) => v - 0);
    let N = nm[0], M = nm[1];
    const MAX_N = 1e5 + 1;
    let V = new Array(MAX_N).fill(0).map(() => []);
    for (let m = 0; m < M; m++) {
        let py = lines.shift().split(/\s/).map((v) => v - 0);
        V[py[0]].push({year: py[1], index: m});
    }
    const d6 = (n) => ('000000' + n.toString()).slice(-6);
    const d12 = (p, y) => d6(p) + d6(y);
    let ans = new Array(M);
    for (let m = 0; m < MAX_N; m++) {
        V[m].sort((a, b) => a.year - b.year);
        let v = V[m];
        for (let n = 0; n < v.length; n++) {
            ans[v[n].index] = d12(m, n + 1);
        }
    }
    for (let m = 0; m < M; m++) {
        console.log(ans[m]);
    }
}
if (typeof window == "undefined") Main(require("fs").readFileSync("/dev/stdin", "utf8"));
