"use strict";
    
const main = arg => {
    arg = arg.trim().split("\n");
    const N = parseInt(arg[0].split(" ")[0]);
    const X = arg[1].split("");
    
    let answer = [];
    
    for(let i=0; i<N; i++) {
        const Xc = [...X];
        Xc[i] = Xc[i] === "0" ? "1" : "0";
        
        let num = parseInt(Xc.join(""), 2);
        let one = Xc.filter(n=>n==="1").length;
        
        let cnt = 0;
        
        while(true) {
            // console.log("num:" + num);
            // console.log("one:" + one);
            // console.log("----");
            if(num === 0) break;
            num = num % one;
            one = num.toString(2).split("").filter(n=>n==="1").length;
            
            cnt++;
        }
        
        answer.push(cnt);
        // console.log("HOGEEEEEEEEEEEEEEEEEEEEEE")
    }
    
    console.log(answer.join("\n"));
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));