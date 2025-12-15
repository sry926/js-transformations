'use strict'

const main = arg => {
    const input = arg.trim().split("\n");
    const nums = input[1].split(" ").filter((obj, i) => i < Number(input[0]))
                                    .map(num => parseInt(num, 10));
    const result = [];
    for(let i=nums.length-1;i>=0;i--){
        result.push(nums[i]);
    }

    console.log(result.join(" "));
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
