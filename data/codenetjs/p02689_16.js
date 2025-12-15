function main(input) {
  var inputs = input.split('\n');

  var nums = inputs[0].split(' ');
  var n = parseInt(nums[0], 10);
  var m = parseInt(nums[1], 10);
  var hs = inputs[1].split(' ').map((n) => parseInt(n, 10));

  var bridges = [];
  for (var i = 0; i < m; i++) {
    var nums = inputs[i + 2].split(' ').map((n) => parseInt(n, 10));
    bridges.push(nums);
  }

  // true: good, false: bad
  var evaluates = [];
  for (var i = 0; i < hs.length; i++) {
    evaluates.push(true);
  }

  bridges.forEach((item, i) => {
    var peak1 = item[0] - 1;
    var peak2 = item[1] - 1;
    var isHeigherPeak1 = hs[peak1] > hs[peak2];
    var isHeigherPeak2 = hs[peak2] > hs[peak1];

    if (evaluates[peak1]) {
      evaluates[peak1] = isHeigherPeak1;
    }

    if (evaluates[peak2]) {
      evaluates[peak2] = isHeigherPeak2;
    }
  });

  var goodPeakCount = 0;
  evaluates.forEach((item, i) => {
    if (item) goodPeakCount += 1;
  });

  console.log(goodPeakCount);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
