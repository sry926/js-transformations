const input = require("fs").readFileSync("/dev/stdin", "utf8")

;(input => {
    const rows = input.split('\n')
    const N = rows[0] - 0
    const A = rows[1].split(' ').map(Number)

    let count = 0
    for (let i = 0; i < N; i++) {
        for (let j = A[i] + 1; j < N; j++) {
            if (j - i === A[i] + A[j]) {
                count++
            }
        }
    }

    console.log(count)

})(input)
