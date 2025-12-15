'use strict';

function Main(INPUT) {
    const input = INPUT.split("\n");
    const N = Number(input[0].split(" ")[0]);
    let K = Number(input[0].split(" ")[1]);
    const A = input[1].split(" ").map(n => Number(n));
    let tmpary = [];
    for (let i = 0; i < N; i++) {
        let tmp = 0;
        for (let j = i; j < N; j++) {
            tmp += A[j];
            tmpary.push(tmp);
        }
    }
    tmpary.sort((a, b) => b - a).map(n => n.toString(2));
    let ans = [];
    for (let i = 0; i <= tmpary.length - K; i++) {
        ans.push(tmpary[i]);
        for (let j = i + 1; j < i + K; j++) {
            ans[ans.length - 1] = ans[ans.length - 1] & tmpary[j];
        }
    }
    ans.sort((a, b) => b - a);
    console.log(ans[0]);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
