"use strict";

const main = arg => {
    arg = arg.trim().split("\n");
    const N = parseInt(arg[0]);
    const MOD = 1e9 + 7;
    
    let cnt = [...Array(N + 1)].fill(0);
    
    for(let i=1; i<=N; i++) {
        let b = i;
        
        for(let j=2; j<=N; j++) {            
            while(b % j === 0) {
                b /= j;
                cnt[j]++;
            }
        }
    }
    
    let answer = 1;
    
    for(let i=2; i<=N; i++) {
        answer = answer * (cnt[i] + 1) % MOD;
    }
    
    console.log(answer);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
