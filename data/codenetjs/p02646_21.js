"use strict"
function main(arg) {
    let tmp = arg.trim().split("\n")
    let [A,V] = tmp[0].split(" ").map(Number)
    let [B,W] = tmp[1].split(" ").map(Number)
    let T = Number(tmp[2]) +0
    let at,bw
    let ans = false
    if (B < A) {
        // 鬼の方が先
        at = BigInt(A) - BigInt(V) * BigInt(T) //鬼
        bw = BigInt(B) - BigInt(W) * BigInt(T) //逃げ
        if (at <= bw) {
            ans = true
        }
    } else {
        at = BigInt(A) + BigInt(V) * BigInt(T) //鬼
        bw = BigInt(B) + BigInt(W) * BigInt(T)
        if (at >= bw) {
            ans = true
        }
    }
    if (ans) {
        console.log('YES')
    } else {
        console.log('NO')
    }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
