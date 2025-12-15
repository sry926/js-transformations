function main(lines) {
  const N = n();

  let cnt = 0;
  for (let a = 1; a < N; a++) {
    cnt += Math.floor((N-1) / a);
  }
  
  return cnt;
}



const lines = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");

let lineCount = 0;
const s = () => lines[lineCount++];
const n = () => Number(s());
const b = () => BigInt(s());
const sa = () => s().split(' ');
const na = () => sa().map(Number);
const ba = () => sa().map(BigInt);
const getLines = (n) => lines.slice(lineCount, lineCount += n);

const ans = main(lines);
console.log( ans );