inp = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n')
s = inp.shift()
N = inp.shift() * 1
f = 0
p = []
e = []
for (i=0; i<N; i++) {
    l = inp.shift().split(" ")
    if (l[0] == 1) {
        f++
    } else {
        if (l[1] == 1) {
            if (f % 2 === 0) {
                p.push(l[2])
            } else {
                e.push(l[2])
            }
        } else {
            if (f % 2 === 1) {
                p.push(l[2])
            } else {
                e.push(l[2])
            }
        }
    }
}
if (f % 2) {
    t = ""
    for (i = 0; i < s.length; i++) {
        t += s[s.length - i - 1]
    }
    s = e.reverse().join("") + t + p.join("") 
} else {
    s = p.reverse().join("") + s + e.join("") 
}
console.log(s)