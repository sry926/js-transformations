inp = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n')
S = inp.shift()
T = inp.shift()
for (i=S.length-1; i>=0; i--) {
    f = 1
    for (j=0; j<T.length; j++) {
        if (!(S[i+j] == T[j] || S[i+j] == '?')) {
            f = 0
        }
    }
    if (f==1) {
        break;
    }
}
if (f==1) {
    ans = ''
    for (k=0; k<S.length; k++) {
        if (k == i) {
            ans += T
            k += T.length - 1
        } else {
            ans += S[k] == '?' ? 'a' : S[k]
        }
    }
} else {
    ans = 'UNRESTORABLE'
}
console.log(ans)