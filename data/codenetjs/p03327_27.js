"use strict"
function Main(stdin){
stdin = stdin.trim().split("\n").reverse();
let stdout = [];
function input(){return stdin.pop()};
function print(x){stdout.push(x)};
function max(list){return list.reduce(function(a,b){ return Math.max(a,b) }) }
function min(list){return list.reduce(function(a,b){ return Math.min(a,b) }) }
function sum(list){return list.reduce(function(a,b){ return a+b }) }
function sortex(list, index){list.sort((a, b) => a[index] - b[index])}
function all(list){return list.reduce(function(a,b){ return a && b }) }
function any(list){return list.reduce(function(a,b){ return a || b }) }
function equal(arr, brr){
    if (arr.length !== brr.length){ throw new Error("length not match") }
    let crr = new Array(arr.length)
    for (let i = 0; i < arr.length; i++){ crr[i] = (arr[i] === brr[i]) }
    return all(crr)
}
/*START*/

function isneg(x){if(x[0]=="-"){return true}else{return false}}
function neg(x){if(isneg(x)){return x.slice(1, x.length)}else{return "-"+x}}

function zerot(x){
    let rx = Array.from(x).reverse()    
    while(rx[rx.length - 1] === "0"){
        rx.pop()
        if (rx.length === 0){
            rx = ["0"]
            break;
        }
    }
    return rx.reverse().join("")
}

function zerocut(x){
    if (isneg(x)){
        let ans = neg(zerot(neg(x)))
        if (ans === "-0"){ return "0" }
        return ans
    }else{
        return zerot(x)
    }
}

function bigsmal(x, y){
    if (isneg(x) || isneg(y)){ throw new Error("negative input") }
    if (x.length > y.length){
        return [x, y]
    }else if(x.length < y.length){
        return [y, x]
    }else{
        return [x, y].sort().reverse()
    }
}


function bigsmall(x, y){
    if (!isneg(x) && isneg(y)){
        return [x,y]
    }else if (isneg(x) && !isneg(y)){
        return [y,x]
    }else if (!isneg(x) && !isneg(y)){
        return bigsmal(x, y)
    }else if (isneg(x) && isneg(y)){
        let tmp = bigsmal(neg(x), neg(y)).reverse()
        return Array.from(tmp, i => neg(i))   
    }
}


let n = input()
if (equal(bigsmall("999", n), ["999", n])){
    print("ABC")
}else{
    print("ABD")
}

/*END*/
console.log(stdout.join("\n"));
return stdout
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"))