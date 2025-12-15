function partition(nums,p,r){
    let base = nums.slice(-1);
    let i=p-1;
    for(let j=p;j<r;j++){
        if(nums[j]<=base){
            i++;
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }
    }
    let temp = nums[i+1];
    nums[i+1] = "["+nums[r]+"]";
    nums[r] = temp;
    return nums;
    
    
    
}

let nums = require("fs").readFileSync("/dev/stdin","utf-8").trim().split("\n")[1].split(" ").map(Number);
console.log(partition(nums,0,nums.length-1).join(" "));
