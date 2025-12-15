console.log((args=>{
  const [[H,W],...tmp] = args.trim().split`\n`.map(r=>r.split` `.map(v=>v|0));
  const c = tmp.slice(0,10), A = tmp.slice(10);
  const dp = Array(10).fill(0);
  for ( let i = 0; i < 10; i++ ) dp[i] = c[i][1];
  for ( let i = 0; i < 10; i++ ) {
    if ( i === 1 ) continue;
    for ( let j = 0; j < 10; j++ ) {
      if ( j === 1 ) continue;
      dp[i] = Math.min( dp[i], dp[j] + c[i][j] );
    }
  }
  let cost = 0;
  for ( let i = 0; i < H; i++ ) {
    for ( let j = 0; j < W; j++ ) {
      if ( A[i][j] === -1 || A[i][j] === 1 ) continue;
      cost += dp[A[i][j]];
    }
  }
  return cost;
})(require('fs').readFileSync('/dev/stdin', 'utf8')));
