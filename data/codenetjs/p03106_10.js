"use strict";
function lcm(a) {
    var g = (n, m) => m ? g(m, n % m) : n;
    var l = (n, m) => n * m / g(n, m);
    var ans = a[0];
    for (var i = 1; i < a.length; i++) {
        ans = l(ans, a[i]);
    }
    return ans;
} 
function Main(input) {
    let Ln = input.split(/\s/).map((v) => v - 0);
    let a = Ln[0], b = Ln[1], k = Ln[2];
    let f = lcm([a, b]), c = 0;
    for (let n = f; n > 0; n--) {
        if (a % n == 0 && b % n == 0) {
            c++;
            if (c == k) {
                console.log(n);
                return;
            }
        }
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
