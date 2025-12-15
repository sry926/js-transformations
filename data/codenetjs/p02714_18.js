'use strict'
const Main=input=>{
    input=input.split("\n");
    const num=parseInt(input[0]);
    const str=input[1];
    
    let count=0;
    
    for(let i=1;i<=num;++i){
        for(let j=i+1;j<=num;++j){
            for(let k=j+1;k<=num;++k){
                if(k-j!=j-i){
                    if(str[i-1]!=str[j-1]&&str[i-1]!=str[k-1]&&str[j-1]!=str[k-1]){
                        count++;
                    }
                }
            }
        }
    }
    
    console.log(count);
}

Main(require("fs").readFileSync("/dev/stdin","utf8"));