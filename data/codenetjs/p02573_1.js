const input = require("fs").readFileSync("/dev/stdin", "utf8")
const lines = input.split('\n')
let [N, M] = lines[0].trim().split(' ').map(Number)

const g = {}
let ai = 1
const map = {}
for (let i = 1; i <= M; i++) {
    const [a, b] = lines[i].trim().split(' ').map(Number)
    if (!map[a] && !map[b]) {
        g[ai] = [a, b]
        map[a] = ai
        map[b] = ai
        ai++
    } else if (map[a] && map[b]) {
        if (map[a] !== map[b]) {
            if (g[map[a]].length > g[map[b]].length) {
                g[map[b]].forEach(n => {
                    g[map[a]].push(n)
                    map[n] = map[a]
                })
            } else {
                g[map[a]].forEach(n => {
                    g[map[b]].push(n)
                    map[n] = map[b]
                })
            }
        }
    } else if (map[a]) {
        g[map[a]].push(b)
        map[b] = map[a]
    } else if (map[b]) {
        g[map[b]].push(a)
        map[a] = map[b]
    } else {
        dummy.dummy = 1
    }
}

let ans = 0
Object.keys(g).forEach(key => {
    ans = Math.max(ans, g[key].length)
})
console.log(ans)
