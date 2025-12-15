log = console.log;

var stdin = require("fs").readFileSync("/dev/stdin", "UTF-8");
var lines = stdin.split("\n");
var N = lines[0].split(" ").map(Number)[0];
var A = lines
  .slice(1)
  .filter(v => v !== "")
  .map(v => v.split(" ").map(Number));

var As = []

A.forEach(v=>{
  if(As[v] === undefined){
    As[v] = 1;
  } else if(As[v] === 1){
    As[v] = 0
  } else {
    As[v] = 1
  }
})

var count = As.reduce((a,b)=>a+b)

log(count);
