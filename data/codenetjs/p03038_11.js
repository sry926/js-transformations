function Main(input) {
    lines = input.split('\n')
    n = lines[0].split(' ')[0] * 1
    m = lines[0].split(' ')[1] * 1
    cs = lines[1].split(' ').sort(function (a, b) { return a - b })
    ls = lines.slice(2).sort(function(a, b) { return b.split(' ')[1] - a.split(' ')[1] })
    idx = 0
    for (i = 0; i < ls.length; i++) {
        b = ls[i].split(' ')[0] * 1
        c = ls[i].split(' ')[1] * 1
        for (j = 0; j < b; j++) {
            if (cs[idx + j] == undefined) break
            if (cs[idx + j] < c) {
                cs[idx + j] = c
            } else {
                break
            }
        }
        idx += j
        if (cs[idx] == undefined) break
    }
    ans = cs.reduce(function(a, c) { return a + c * 1}, 0)
    console.log(ans)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
