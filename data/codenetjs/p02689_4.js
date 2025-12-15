"use strict";
    
const main = arg => {
    arg = arg.trim().split("\n");
    const N = parseInt(arg[0].split(" ")[0]);
    const M = parseInt(arg[0].split(" ")[1]);

    const H = arg[1].split(" ").map(n=>parseInt(n));
    const AB = arg.slice(2, M + 2).map(n=>n.split(" ").map(l=>parseInt(l)));
    
    let list = [...Array(N)].fill(true);
    
    for(let i=0; i<M; i++) {
        // list[AB[i][0]-1].push(AB[i][1]-1);
        // console.log(list)
    
        let A = AB[i][0]-1;
        let B = AB[i][1]-1;
        
        // console.log("-----");
        // console.log("H[A]" + H[A]);
        // console.log("H[B]" + H[B]);
        
        if(H[A] <= H[B]) {
            // console.log(A + "はいい展望台ではない")
            list[A] = false;
        }
        
        if(H[B] <= H[A]) {
            // console.log(B + "はいい展望台ではない")
            list[B] = false;
        }
    }
    
    console.log(list.filter(n=>n===true).length);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));