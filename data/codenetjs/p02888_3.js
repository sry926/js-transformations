"use strict";

const main = arg => {
    arg = arg.trim().split("\n");
    const N = parseInt(arg[0]);
    const L = arg[1].split(" ").map(n=>parseInt(n)).sort((a,b)=>b-a);
    
    // console.log(L);
    
    let answer = 0;
    
    // a<b<c かつ c < a+b の個数
    // cを決め打つ
    for(let i=0; i<N-2; i++) {
        const c = L[i];
        
        for(let j=i + parseInt(1); j<N-1; j++) {
            const a = L[j];
            
            for(let k=j + parseInt(1); k<N; k++) {
                const b = L[k];
                
                if(a + b > c) {
                    answer++;
                } else {
                    break;
                }
            }
        }

    }
    
    console.log(answer);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));