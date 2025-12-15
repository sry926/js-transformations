"use strict";

function main(arg) {
    const input = arg.split("\n")
    const N = Number(input[0])
    const A = input[1].split(" ").map(x=>Number(x))

    let sortedA = A.map((x,i)=>[x,i]).sort((a,b)=>a[0]-b[0])
    //console.log(sortedA)
    
    let count = 0
    let base = []
    for(let i = 0; i < N; i++) {
        let j = 0
        base.some(x=>{
            if(sortedA[i] % x[0] === 0) {
                count++
                j=N
                return true;
            }
        })
        for(; j < N; j++) {
            if(i !== j) {
                if(sortedA[i][0]%sortedA[j][0]===0) {
                    base.push([sortedA[i]])
                    count++
                    break
                }
            }
        }
    }
    //console.log(base)
    console.log(N-count)

}

main(require("fs").readFileSync("/dev/stdin", "utf8"));