"use strict";
    
const main = arg => {
    arg = arg.split("\n");
    const s = arg[0];
    
    let answer = [];
    
    for(let i=0; i<s.length; i++) {
        if(s[i] === "0") {
            answer.push(0);
        }
        
        if(s[i] === "1") {
            answer.push(1);
        }
        
        if(s[i] === "B" && answer.length > 0) {
            answer.pop();
        }
    }
    
    console.log(answer.join(""));
    
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));