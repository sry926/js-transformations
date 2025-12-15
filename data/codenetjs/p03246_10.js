"use strict";
function Main(input) {
    let lines = input.split("\n");
    let N = lines.shift() - 0;
    let Vc = lines[0].split(/\s/).map((v) => v - 0);
    let a = [{}, {}], sw = 0;
    for (let v of Vc) {
        let b = a[sw][v] || 0;
        a[sw][v] = b + 1;
        sw = (sw + 1) % 2;
    }
    let c = [[], []];
    for (let m = 0; m < 2; m++) {
        for (let v in a[m]) {
            c[m].push({value:v, count:a[m][v]});
        }
    }
    c[0].sort((a, b) => b.count - a.count);
    c[1].sort((a, b) => b.count - a.count);

    let ans = 0;
    let n = N / 2;
    let e0 = c[0][0], e1 = c[0][1] || {value:0, count:0};
    let o0 = c[1][0], o1 = c[1][1] || {value:0, count:0};
    if (e0.value == o0.value) {
        if (e0.count >= o0.count) {
            ans += n - e0.count;
            ans += n - o1.count;
        } else {
            ans += n - e1.count;
            ans += n - o0.count;
        }
    } else {
        ans += n - e0.count;
        ans += n - o0.count;
    }

    console.log(ans);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
