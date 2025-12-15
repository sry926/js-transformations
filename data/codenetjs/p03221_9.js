"use strict";
    
const main = arg => {
    arg = arg.trim().split("\n");
    const N = parseInt(arg[0].split(" ")[0]);
    const M = parseInt(arg[0].split(" ")[1]);

    const PY = arg.slice(1, M + 1).map(n=>n.split(" ").map(l=>parseInt(l)));
    const list = [];
    
    for(let i in PY) {
        let map = {p: PY[i][0], y: PY[i][1], originIdx: i};
        
        list.push(map);
    }
    
    // PY.sort((a,b)=> (a[0] - b[0]) || (a[1] - b[1]));
    list.sort((a,b)=> (a.p - b.p) || (a.y - b.y));
    
    const addZero = n => {
        const zeros = [];
        
        for(let i=0; i<6 - String(n).length; i++) {
            zeros.push("0");
        }
        
        return zeros.join("") + String(n);
    }
    
    let temp = [];
    let oldness = 1;
    
    for(let i in list) {
        if(list[i-1] && list[i-1].p !== list[i].p) {
            oldness = 1;
        }
        
        let first = addZero(list[i].p);
        let last  = addZero(oldness);
        
        let map = {id: first + last, originIdx: list[i].originIdx}
        
        temp.push(map);
        oldness++;
    }
    
    // console.log(PY.join("\n"));
    // console.log(addZero(3));
    
    temp.sort((a,b)=>a.originIdx - b.originIdx);
    
    let answer = [];
    
    for(let i in temp) {
        answer.push(temp[i].id);
    }
    
    console.log(answer.join("\n"));
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));