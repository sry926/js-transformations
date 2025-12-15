"use strict";

const gen = function (first, digit) {
    if(first == 1 && digit == 1) return [1,2,3,4,5,6,7,8,9]
    let q = [[first]]
    let ans = []
    while (q.length > 0) {
        let tmp = q.shift()
        if (tmp.length == digit) {
            ans.push(Number(tmp.join("")))
            continue
        }
        const last = tmp[tmp.length - 1]
        if (last !== 0) q.push([...tmp, last - 1])
        q.push([...tmp, last])
        if (last !== 9) q.push([...tmp, last + 1])
    }
    return ans
}

const main = arg => {
    const input = arg.trim().split("\n");

    let K = parseInt(input[0].split(" ")[0]);
    let first = 1
    let digit = 1
    while(K > 0){
        let tmp = gen(first, digit)
        // console.log(K, first, digit, tmp)
        if(tmp.length >= K){
            console.log(tmp[K-1])
            return
        }
        K = K - tmp.length
        if(first==1 && digit == 1){
            digit++
        }else if(first !== 9){
            first++
        }else{
            first = 1
            digit++
        }
    }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

