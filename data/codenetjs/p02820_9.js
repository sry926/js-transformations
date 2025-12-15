'use strict';
(function(input){
  input=input.trim().split(/\s+/);
  const N=input[0]-0,
        K=input[1]-0,
        R=input[2]-0,
        S=input[3]-0,
        P=input[4]-0,
        str=input[5].split('');
  
  let score = 0;
  
  for(let k=0;k<K;k++){
    var arr=[];
    var l=0;
    var s=k;
    while(l<N){
      arr[l]=str[s];
      l++;
      s+=K;
    }
    
    var dpr=[],dps=[],dpp=[];
    dpr[-1]=dps[-1]=dpp[-1]=0;
    arr.forEach(function(c,l){
      dpr[l]=(c==='s'?R:0)+Math.max(dps[l-1],dpp[l-1]);
      dps[l]=(c==='p'?S:0)+Math.max(dpp[l-1],dpr[l-1]);
      dpp[l]=(c==='r'?P:0)+Math.max(dpr[l-1],dps[l-1]);
    });
    score+=Math.max(dpr.pop(),dps.pop(),dpp.pop());
  }
  console.log(score);
})(require('fs').readFileSync('/dev/stdin','utf8'));
