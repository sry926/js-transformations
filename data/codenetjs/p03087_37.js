'use strict';
console.log(function(args){
  const tmp = args.trim().split('\n').map( r=>r.split(' ') );
  const N = tmp[0][0]|0;
  const Q = tmp[0][1]|0;
  const S = tmp[1][0] + ' ';
  const s = Array(N+1).fill(0);
  for ( let i = 0; i < N; i++ ) {
    s[i+1] = s[i];
    if ( S[i] !== 'A' ) continue;
    if ( S[i+1] !== 'C' ) continue;
    s[i+1]++;
  }
  const out = [];
  for ( let i = 0; i < Q; i++ ) {
    const l = tmp[2+i][0] - 1;
    const r = tmp[2+i][1] - 1;
    out.push( s[r] - s[l] );
  }
  return out.join('\n');
}(require('fs').readFileSync('/dev/stdin', 'utf8')));
