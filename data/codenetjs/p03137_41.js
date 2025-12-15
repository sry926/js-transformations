const input = require("fs").readFileSync("/dev/stdin", "utf8")
;(input => {
    const rows = input.split('\n')
    const N = rows[0].split(' ').map(Number)[0]
    const M = rows[0].split(' ').map(Number)[1]
    const X = rows[1].split(' ').map(Number)

    X.sort((a, b) => a - b)

    const dp = []
    for (var i = 0; i < M - 1; i++) {
        dp[i] = X[i + 1] - X[i]
    }

    dp.sort((a, b) => b - a)
    dp.splice(0, N - 1)

    console.log(dp.length ? dp.reduce((a, b) => a + b) : 0)

})(input)
