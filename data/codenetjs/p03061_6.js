'use strict'
function GCM(p,q){
  if(p===0||q===0)return Math.max(p,q);
  if(p===q)return p;
  else return GCM(p%q,q%p);
}

function Main(input){
  input=input.trim().split(/\s+/).map(x=>x-0);
  var N=input.shift();
  var candidates=[0];
  var values=[];
  var a=0;
  for(let i=0;i<N;i++){
    let b=GCM(a,input[i]);
    if(a>b)candidates.push(i);
    a=b;
  }
  for(let j=0;j<candidates.length;j++){
    let v=0;
    v=input.reduce(function(acum,cur,index){
      if(index===candidates[j])
        return acum;
      else
        return GCM(acum,cur);
    },0);
    values.push(v);
  }
  var ans=Math.max.apply(null,values);
  console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin','utf8'));
