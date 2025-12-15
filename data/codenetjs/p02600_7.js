"use strict";
    
const main = arg => {
    arg = arg.trim().split("\n");
    const X = parseInt(arg[0].split(" ")[0]);
    
    if(X >= 400 && X <= 599) {
        console.log(8);
    } else if(X >= 600 && X <= 799) {
        console.log(7);
    } else if(X >= 800 && X <= 999) {
        console.log(6);
    } else if(X >= 1000 && X <= 1199) {
        console.log(5);
    } else if(X >= 1200 && X <= 1399) {
        console.log(4);
    } else if(X >= 1400 && X <= 1599) {
        console.log(3);
    } else if(X >= 1600 && X <= 1799) {
        console.log(2);
    } else if(X >= 1800 && X <= 1999) {
        console.log(1);
    }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));