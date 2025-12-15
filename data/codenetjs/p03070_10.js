'use strict'
function Main(input){
  const K=998244353;
  input=input.trim().split(/\s+/).map(x=>x-0);
  var N=input.shift();
  var sum=input.reduce((a,c)=>a+c);
  var half=Math.floor(sum/2);
  var factor=[3];
  for(let i=0;i<N-1;i++){
    factor.push(factor[i]*2%K);
  }
  
  var dp=[];
  //dp[i][j][k]でinput[0~i]のうちj個を使って合計をkにする場合の数
  for(let i=0;i<=N;i++){
    dp[i]=[];
    for(let j=0;j<=i;j++){
      dp[i][j]=[];
      for(let k=0;k<=sum;k++){
        dp[i][j][k]=0;
      }
    }
  }
  dp[0][0][0]=1;
  for(let i=0;i<N;i++){
    for(let j=0;j<=i;j++){
      for(let k=0;k<=sum;k++){
        dp[i+1][j][k]+=dp[i][j][k];
        dp[i+1][j][k]%=K;
      }
      for(let k=input[i];k<=sum;k++){
        dp[i+1][j+1][k]+=dp[i][j][k-input[i]];
        dp[i+1][j+1][k]%=K;
      }
    }
  }
  var ans=1;
  for(let i=0;i<N;i++){
    ans*=3;
    ans%=K;
  }
  for(let i=0;i<N;i++){
    ans-=factor[i]*dp[N][i].reduce(function(b,c,j){
      if(j<=half)
        b+=c;
        b%=K;
      return b;
    },0)%K;
  }
  while(ans<0)
    ans+=K;
  ans%=K;
  if(sum%2===0){
    for(let j=0;j<=N;j++){
      ans+=3*dp[N][j][half];
      ans%=K;
    }
  }
  console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin','utf8'));
