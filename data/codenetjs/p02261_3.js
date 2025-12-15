let content = '';
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', buf => {
  content += buf;
});

process.stdin.on('end', () => {
  let [, nums] = content
    .trim()
    .split('\n')
    .map(line => line.split(' '));
  const bsortResult = bubbleSort(nums);
  console.log(bsortResult.join(' '));
  console.log('Stable');

  const ssortResult = selectionSort(nums);
  const isStable = ssortResult.every((n, i) => n === bsortResult[i]);
  console.log(ssortResult.join(' '));
  console.log(isStable ? 'Stable' : 'Not stable');
});

const compare = (a, b) => {
  const numA = +a[1];
  const numB = +b[1];
  return numA - numB;
};

const selectionSort = nums => {
  nums = nums.slice(0);
  for (let i = 0; i < nums.length; i++) {
    let minIdx = i;
    for (let j = i; j < nums.length; j++) {
      if (compare(nums[minIdx], nums[j]) > 0) {
        minIdx = j;
      }
    }
    
    if (compare(nums[minIdx], nums[i]) !== 0) {
      let tmp = nums[minIdx];
      nums[minIdx] = nums[i];
      nums[i] = tmp;
    }
  }
  
  return nums;
};


const bubbleSort = nums => {
  nums = nums.slice(0);
  let flag = true;
  let min = 1;
  while(flag) {
    flag = false;
    for (let i = nums.length - 1; i >= min; i--) {
      if (compare(nums[i], nums[i - 1]) < 0) {
        flag = true;
        const tmp = nums[i];
        nums[i] = nums[i - 1];
        nums[i - 1] = tmp;
      }
    }
    min++;
  }

  return nums;
};
