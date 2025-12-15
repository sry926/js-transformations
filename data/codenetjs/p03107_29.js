"use strict";
function Main(input) {
    let S = input.split("\n")[0];
    let s = S.split('');
    let c = 0, f = true;
    const func = (m) => {
        let n;
        for (n = m; n < s.length && s[n] === undefined; n++) { }
        return n;
    }
    while (f) {
        f = false;
        for (let n = 0; n < s.length - 1; n++) {
            let p0 = func(n); 
            let p1 = func(p0+1);
            if ((s[p0] == '0' && s[p1] == '1') || (s[p0] == '1' && s[p1] == '0')) {
                c += 1;
                delete s[p0]; delete s[p1];
                n = -1;
            }
        }
        console.log(c*2);
        return;
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
