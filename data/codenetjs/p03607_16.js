"use strict";
  const main = arg => {
  let Nums = arg.split("\n");
  const N = Nums.shift(0);
  Nums = Nums.sort((a,b)=>{return a - b});
  // 答え用の配列
  let NewNums = new Set(Nums);
    
  for(let i = 0; i < N - 1; i++){
  	if(Nums[i] == Nums[i+1]){
    	NewNums.delete(Nums[i]);
    }
  }
  console.log(NewNums.size);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));