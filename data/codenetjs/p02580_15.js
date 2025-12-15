console.log((args=>{
  const [[H,W,M],...target] = args.trim().split`\n`.map(r=>r.split` `.map(v=>v|0));
  const b = Array.from({length:H},_=>Array(W).fill(false));
  const bR = Array(H).fill(0);
  const bC = Array(W).fill(0);
  let xR = 0, xC = 0;
  for ( const [h,w] of target ) {
    b[h-1][w-1] = true;
    xR = Math.max(xR,++bR[h-1]);
    xC = Math.max(xC,++bC[w-1]);
  }
  for ( let i = 0; i < H; i++ ) if ( bR[i] === xR ) {
    for ( let j = 0; j < W; j++ ) if ( bC[j] === xC ) {
      if ( !b[i][j] ) return xR+xC;
    }
  }
  return xR+xC-1;
})(require('fs').readFileSync('/dev/stdin','utf8')));
