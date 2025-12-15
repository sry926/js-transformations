"use strict"
const create = () => {
    const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
    const res = {
        "list": input, "index": 0, "max": input.length,
        "hasNext": function() {return this.index < this.max},
        "next": function() { if (!this.hasNext()) {throw "ArrayIndexOutOfBoundsException";}else{return this.list[this.index++];}}
    };
    return res;
}
const o = create();
const next = () => o.next()
const nextInt = () => parseInt(o.next())
const nextStrArray = () => o.next().split(" ")
const nextIntArray = () => o.next().split(" ").map(el => parseInt(el))
const nextCharArray = () => o.next().split("")
const hasNext = () => o.hasNext()
const myout = (...x) => console.log(...x)
const Main = () => {
    const [N, M] = nextIntArray()
    let a = []
    while(hasNext()){
        a.push(nextInt())
    }
    let dp = {}
    dp[0] = 1n
    if(a[0] == 1n) dp[1] = 0n
    else dp[1] = 1n
    for(let i = 2;i<=N; i++){
        if(a.includes(i)) dp[i] = 0n
        else {
            dp[i] = dp[i-1] + dp[i-2]
        }        
    }
    console.log(Number(dp[N] % 1000000007n))
}
Main()
