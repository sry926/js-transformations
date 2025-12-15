function Main(input) {
    lines = input.split('\n')
    n = lines[0].split(' ')[0] * 1
    m = lines[0].split(' ')[1] * 1
    cs = lines[1].split(' ').sort(function (a, b) { return a - b })
    // console.log(cs)
    ans = 0;
    ls = lines.slice(2).sort(function(a, b) { return b.split(' ')[1] - a.split(' ')[1] })
    // console.log(ls)
    for (i = 0; i < ls.length; i++) {
    b = ls[i].split(' ')[0] * 1
    c = ls[i].split(' ')[1] * 1
    idx = 0
    for (j = 0; j < b; j++) {
        if (cs[j] > c) {
            idx = j
            break;
        }
    }
    if (j == b) {
        idx = j
    }
    if (idx > 0) {
        cs.splice(0, idx)
        ans += c * idx
    }
    // console.log(j, idx, cs, ans)
    if (cs.length == 0) break;
    }
    ans += cs.reduce(function(a, c) { return a + c * 1}, 0)
    console.log(ans)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
