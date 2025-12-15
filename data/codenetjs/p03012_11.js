'use strict'
const Main = (arg) => {
  let input = arg.trim().split('\n');
  let N = input[0].split(' ').map(Number)[0];
  let Arr = input[1].split(' ').map(Number);

  let SmS = [];
  for (let i = 1; i < N; i++) {
    let leftS = Arr.slice(0, i).reduce((ttl, data) => { return ttl + data });
    let rightS = Arr.slice(-(N - i)).reduce((ttl, data) => { return ttl + data });
    SmS.push(Math.abs(leftS - rightS));
  }
  console.log(Math.min(...SmS));


}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
