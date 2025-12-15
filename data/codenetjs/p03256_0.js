"use strict";
var input=require("fs").readFileSync("/dev/stdin","utf8");
var cin=input.split(/ |\n/),cid=0;
function next(){return +cin[cid++];}
function nextstr(){return cin[cid++];}
function nextbig(){return BigInt(cin[cid++]);}
function nexts(n,a){return a?cin.slice(cid,cid+=n):cin.slice(cid,cid+=n).map(a=>+a);}
function nextm(h,w,a){var r=[],i=0;if(a)for(;i<h;i++)r.push(cin.slice(cid,cid+=w));else for(;i<h;i++)r.push(cin.slice(cid,cid+=w).map(a=>+a));return r;}
function xArray(v){var a=arguments,l=a.length,r="Array(a["+--l+"]).fill().map(x=>{return "+v+";})";while(--l)r="Array(a["+l+"]).fill().map(x=>"+r+")";return eval(r);}

var myOut = main();
if(myOut !== undefined)console.log(myOut);

function main(){
  var n = next(), m = next();
  var ss = nextstr();
  var s = Array(n).fill().map((a,i)=>ss[i]==="A"?0:1);
  var g = xArray("[]",n);
  var ev = xArray(0,n,2);
  for(var i = 0; i < m; i++){
    var a = next()-1, b = next()-1;
    g[a].push(b);
    g[b].push(a);
    ev[a][s[b]]++;
    ev[b][s[a]]++;
  }
  var cnt = n;
  var q = [];
  for(var i = 0; i < n; i++)if(!(ev[i][0]&&ev[i][1]))q.push(i),cnt--;
  while(q.length){
    var v = q.pop();
    for(var i = 0; i < g[v].length; i++){
      var V = g[v][i];
      if(!(ev[V][0]&&ev[V][1]))continue;
      if(--ev[V][s[v]] === 0)q.push(V),cnt--;
    }
  }
  return cnt ? "Yes" : "No";
}