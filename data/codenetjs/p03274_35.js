inp = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n')
l = inp.shift().split(' ')
N = l.shift() * 1
K = l.shift() * 1 
l = inp.shift().split(' ').map(x => x - 0)
n = []
p = []
for (i=0; i<N; i++) {
    if (l[i] < 0) {
        n.unshift(Math.abs(l[i]))
    } else {
        if (l[i] === 0) {
            K--
            N--
        } else {
            p.push(l[i])
        }
    }
}
if (K === 0) {
    console.log(0)
} else {
    min = Infinity
    if (n[K-1]) {
        if (n[K-1] < min) {
            min = n[K-1]
        }
    }
    if (p[K-1]) {
        if (p[K-1] < min) {
            min = p[K-1]
        }
    }
    c = Math.min(p.length, n.length)
    for (i=0;i<c;i++) {
        if (n[i] && p[K - i - 2]) {
            m = n[i] * 2 + p[K - i - 2]
            if (m < min) {
                min = m
            }
        }
        if (p[i] && n[K - i - 2]) {
            m = p[i] * 2 + n[K - i - 2]
            if (m < min) {
                min = m
            }
        }
    }
    console.log(min)    
}