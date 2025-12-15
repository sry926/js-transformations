console.log((args=>{
  const [s,t] = args.trim().split('\n').map( r=>r.split('').map(v=>v.charCodeAt()));
  s.sort((a,b)=>a-b);
  t.sort((a,b)=>b-a);
  for ( let i = 0, l = Math.min(s.length,t.length); i < l; i++ ) {
    if ( s[i] < t[i] ) return 'Yes';
    if ( s[i] > t[i] ) return 'No';
  }
  return (s.length<t.length)?'Yes':'No';
})(require('fs').readFileSync('/dev/stdin', 'utf8')));
