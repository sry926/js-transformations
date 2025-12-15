console.log((args=>{
  const S = args.trim();
  const N = S.length;
  let c = 0;
  for ( let i = 0; i < N; i++ ) {
    if ( S[i] === '0' ) c++;
    else c--;
  }
  return N-Math.abs(c);
})(require('fs').readFileSync('/dev/stdin', 'utf8')));
