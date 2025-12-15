'use strict';

var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', function(line){
  lines.push(line);
})
reader.on('close', function(){
  const input = lines[0].split(" ");
  const result = maximizingFormula(input);
  console.log(result);
})

// 1から9の整数3つからなる配列[a,b,c]を与えたとき、その整数と1つの"+"を用いて最大の数を求める関数
// 例)(1,4,5) => 55(51 + 4)
function maximizingFormula(input){
  let maxnum = 0;
  let maxIndex = 0;
  input.map((num, index) => {
    if (num > maxnum) {
      maxnum = num;
      maxIndex = index;
    }
  })
  
  return Number(maxnum.toString() + input[(maxIndex + 1) % 3].toString()) + Number(input[(maxIndex + 2) % 3]);
}
