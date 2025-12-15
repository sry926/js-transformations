const input = require("fs").readFileSync("/dev/stdin", "utf8")
const lines = input.split('\n')
let [N, M] = lines[0].trim().split(' ').map(Number)

const g = {}
let ai = 0
const map = {}
for (let i = 1; i <= M; i++) {
    const l = lines[i].trim().split(' ').map(Number)
    const a = l[0]
    const b = l[1]
    if (!map[a] && !map[b]) {
        ai++
        g[ai] = [a, b]
        map[a] = ai
        map[b] = ai
    } else if (map[a] && map[b]) {
        if (map[a] !== map[b]) {
            if (g[map[a]].length > g[map[b]].length) {
                const _b = map[b]
                g[map[b]].forEach(n => {
                    g[map[a]].push(n)
                    map[n] = map[a]
                })
                delete g[_b]
            } else {
                const _a = map[a]
                g[map[a]].forEach(n => {
                    g[map[b]].push(n)
                    map[n] = map[b]
                })
                delete g[_a]
            }
        }
    } else if (map[a]) {
        g[map[a]].push(b)
        map[b] = map[a]
    } else if (map[b]) {
        g[map[b]].push(a)
        map[a] = map[b]
    }
}

let ans = 0
Object.keys(g).forEach(key => {
    ans = Math.max(ans, g[key].length)
})
console.log(ans)
