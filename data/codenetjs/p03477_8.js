// inputに入力データ全体が入る
function Main(input) {
  var input = input.split('\n');
  var answer;

  var nums = input[0].split(' ');
  nums = nums.map(e => parseInt(e));
  var left = nums[0] + nums[1];
  var right = nums[2] + nums[3];

  if (left > right) {
    answer = 'Left'
  } else if (right > left) {
    answer = 'Right'
  } else {
    answer = 'Balanced'
  }



  // 出力
  console.log(answer);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
