let inputString = '';

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});
process.stdin.on('end', function() {
    const input = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    console.log(countInversions(input[1].split(' ').map(s => Number(s))));
});


let count;
const countInversions = (arr) => {
  count = 0;
  mergeSort(arr, 0, arr.length);
  return count;
};

const mergeSort = (nums, leftIndex, rightIndex) => {
  if (leftIndex + 1 < rightIndex) {
    const sum = leftIndex + rightIndex;
    const mid = (sum - sum % 2) / 2;
    mergeSort(nums, leftIndex, mid);
    mergeSort(nums, mid, rightIndex);
    merge(nums, leftIndex, mid, rightIndex);
  }
};

const merge = (nums, leftIndex, midIndex, rightIndex) => {
  const leftArr = Array.from({ length: midIndex - leftIndex + 1 },(_, i) => nums[leftIndex + i]);
  leftArr[leftArr.length - 1] = Infinity;
  const rightArr = Array.from({ length: rightIndex - midIndex  + 1 }, (_, i) => nums[midIndex + i]);
  rightArr[rightArr.length - 1] = Infinity;

  let i = 0;
  let j = 0;
  for (let k=leftIndex; k<rightIndex; k++) {
    if (leftArr[i] <= rightArr[j]) {
      nums[k] = leftArr[i];
      i++;
    } else {
      nums[k] = rightArr[j];
      j++;

      count += (leftArr.length - 1 - i);
    }
  }
};
