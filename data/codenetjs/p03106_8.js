"use strict"

function Main(stdin){
stdin = stdin.trim().split("\n").reverse();
var stdout = [];
function input(){return stdin.pop()};
function print(x){stdout.push(x)};
function mapint(x){return x.map(n=>parseInt(n))};
function max(x){return x.reduce(function(a,b){ return Math.max(a,b) }) }
function min(x){return x.reduce(function(a,b){ return Math.min(a,b) }) }
function sum(x){return x.reduce(function(a,b){ return a+b }) }


var tmp = mapint(input().split(" "))
var a = tmp[0]
var b = tmp[1]
var k = tmp[2]
var x = [1]
for (var i = 2; i < Math.min(a,b) + 1; i++){
    if (a%i==0 && b%i==0){ x.push(i) }
}
print(x[x.length - k])




stdout = stdout.join("\n");
console.log(stdout);
return stdout
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"))