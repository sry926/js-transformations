function main(arg) {
  const lines = arg.trim().split('\n');
  const N = parseInt(lines[0]);
  const V = lines[1].split(' ').map((x) => parseInt(x));
  const C = lines[2].split(' ').map((x) => parseInt(x));
  let ans = 0;
  for (let i = 0; i < 2 ** N; i++) {
    let res = 0;
    for (let j = 0; j < N; j++) {
      if ((i >> j) & (1 === 1)) {
        res += V[j] - C[j];
      }
    }
    if (res > ans) {
      ans = res;
    }
  }
  console.log(ans);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
