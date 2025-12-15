// inputに入力データ全体が入る
function Main(input) {
inp = input.split('\n')
n = inp[0]
nums = inp[1].split(' ').sort()
console.log('%d',nums[n-1] - nums[0]);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));