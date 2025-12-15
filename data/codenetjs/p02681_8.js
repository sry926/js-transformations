"use strict";
    
const main = arg => {
    arg = arg.trim().split("\n");
    const S = (arg[0].split(" ")[0]).split("");
    const T = (arg[1].split(" ")[0]).split("");
    
    T.pop();
    
    console.log(S.join("") === T.join("") ? "Yes" : "No");
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));