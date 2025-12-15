"use strict"

let N = require('fs').readFileSync('/dev/stdin', 'UTF-8')

let value_1 = 0
for(let i=9;i>0;i--){
    if(N % i == 0){
        value_1 = i
        break
    }
}

if(value_1 > 0 && N % value_1 == 0 && N / value_1 < 10){
    console.log("Yes")
}else{
    console.log("No")
}
