function main(input) {
  const args = input.split('\n');
  const N = parseInt(args[0], 10);
  const ary = args[1].split(' ').map(n => parseInt(n, 10));
  let ans = 999999; //ありえない数字を入れておく
  
  //区切りループ
  for (let i = 1; i < N; i++) {
    l = 0; //左グループ
    r = 0; //右グループ
    for (let j = 0; j < i; j++) l += ary[j];
    for (let j = i; j < N; j++) r += ary[j];
    gap = Math.abs(l - r);
    ans = Math.min(ans, gap);
  }
  
  console.log(ans);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));