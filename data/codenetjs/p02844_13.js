"use strict";

const permutateWithRepetitions = (
  permutationOptions,
  permutationLength
) => {
  if (permutationLength === 1) {
    return permutationOptions.map(permutationOption => [permutationOption]);
  }

  const permutations = [];

  const smallerPermutations = permutateWithRepetitions(
    permutationOptions,
    permutationLength - 1
  );

  permutationOptions.forEach((currentOption) => {
    smallerPermutations.forEach((smallerPermutation) => {
      permutations.push([currentOption].concat(smallerPermutation));
    });
  });

  return permutations;
}

const main = arg => {
    arg = arg.trim().split("\n");
    const N = parseInt(arg[0]);
    const S = arg[1].split("").map(n=>parseInt(n));

    // 最大で1000通りしかありえないので全探索する
    const digits = [0,1,2,3,4,5,6,7,8,9];
    
    const combos = permutateWithRepetitions(digits, 3);
    
    let cnt = 0;
    
    for(let i=0; i<1000; i++) {
        let digit1 = combos[i][0];
        let digit2 = combos[i][1];
        let digit3 = combos[i][2];
        
        let flag1 = false;
        let flag2 = false;
        let flag3 = false;

        for(let j=0; j<N; j++) {
            if(S[j] === digit1 && flag1 !== true) {
                flag1 = true;
            } else if(S[j] === digit2 && flag1 && flag2 !== true) {
                flag2 = true;
            } else if(S[j] === digit3 && flag1 && flag2) {
                flag3 = true;
            }
        }
        
        
        if(flag1 && flag2 && flag3) {
            cnt++;
        }
    }
    
    console.log(cnt);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
