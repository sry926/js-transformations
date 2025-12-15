"use strict";
function I(s,f){this._s=s.split("\n");this._c=0;this._l=0;this._f=f||Number}I.prototype.a=function(){var l=this._s[this._l];if(!l)return;var t=l.trim().split(" ");var a=t[this._c];this._c++;if(t.length===this._c){this._c=0;this._l++}return this._f(a)};I.prototype.l=function(){var l=this._s[this._l];if(!l)return;this._c=0;this._l++;return l.split(" ").map(this._f)};
function buildArray(r,t){let l=t||0;for(let t=r.length;t>0;t--){const n=r[t-1];l=Array(n).fill().map(()=>JSON.parse(JSON.stringify(l)))}return l}

const mod = 1e9 + 7;
function abmod(){for(var a=arguments,r=a[0],i=1;i<a.length;)r=((r>>16)*a[i]%mod*65536+(r&65535)*a[i++])%mod;return r;}

function main(input) {
  const o = new I(input);

  const N = o.a();
  const X = o.a();
  
  const S = [];
  for(let i = 0; i < N; i++) {
    S.push(o.a());
  }

  S.sort((a,b) => b - a);

  let dp1 = Array(X+1).fill(0);
  dp1[X] = 1;
  for (let i = 0; i< N; i++) {
    let dp2 = Array(X+1).fill(0);
    for (let j = 0; j<=X; j++) {
      dp2[j] += dp1[j] * (N-i-1);
      dp2[j] %= mod;

      let m = j%S[i];
      dp2[m] += dp1[j];
      dp2[m] %= mod;
    }
    dp1 = dp2;
  }

  let sum = 0;
  for(let i = 0; i < S[N-1]; i++){
    sum += abmod(i,dp1[i]);
  }

  console.log(sum % mod);
}


main(require("fs").readFileSync("/dev/stdin", "utf8"));
