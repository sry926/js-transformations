function* stdinIter() {
    var stdin = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split(/\n|\s/)
    yield* stdin
}

let _iter
function readMany(n, iter) {
    _iter = iter || _iter || stdinIter()
    var res = []
    for (let i = 0; i < n; i += 1) res.push(_iter.next().value)
    return res
}

(() => {
  	'use strict'
    const [ n, s ] = readMany(2)

    const west = []
    for (let i = 0; i < n; i += 1) {
        const before = west[i - 1] || 0
        if (s[i] == 'W') {
            west.push(before + 1)
        } else {
            west.push(before)
        }
    }

    const leader = []
    for (let i = 0; i < n; i += 1) {
        const people = (west[i - 1] || 0) + ((n - i - 1) - (west[n - 1] - west[i]))
        leader.push(people)
    }

    let ans = Infinity
    for (let i = 0; i < n; i += 1) {
        if (leader[i] < ans) ans = leader[i]
    }

    console.log(ans)
})()
