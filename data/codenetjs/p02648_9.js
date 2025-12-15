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
if(myOut !== undefined)console.log(String(myOut));

function main(){
  var n = next();
  var v = nextm(n,2);
  var w = Array(n)
  w[0] = [v[0]];
  for(var i = 1; i < Math.min(n,512); i++){
    var d = 31-Math.clz32(i+1);
      var t = i-1>>1;
      w[i] = w[t].concat();
      w[i].push(v[i]);
      for(var j = 0; j < w[t].length; j++){
        if(w[t][j][1]+v[i][1]<=1e5)w[i].push([w[t][j][0]+v[i][0],w[t][j][1]+v[i][1]]);
      }
      w[i].sort((a,b)=>a[1]-b[1]);
  }
  var q = next();
  var ans = Array(q);
  for(var i = 0; i < q; i++){
    var x = next(), s = next();
    var d = 31-Math.clz32(x);
    var z = 0;
    x--;
    if(d < 9){
      for(var j = 0; j < w[x].length && w[x][j][1] <= s; j++){
        if(z < w[x][j][0])z = w[x][j][0];
      }
      ans[i] = z;
    }else{
      var wt = [v[x]];
      x = x-1>>1;
      for(var j = d; j >= 9; j--){
        var ln = wt.length;
        wt.push(v[x]);
        for(var j = 0; j < ln; j++){
          if(wt[j][1]+v[x][1]<=1e5)wt.push([wt[j][0]+v[x][0],wt[j][1]+v[x][1]]);
        }
        x = x-1>>1;
      }
      wt.sort((a,b)=>a[1]-b[1]);
      var r = wt.length;
      for(var j = 1; j < r; j++)if(wt[j][0] < wt[j-1][0])wt[j][0] = wt[j-1][0], wt[j][1] = 1e6;
      r--;
      for(var j = 0; j < w[x].length; j++){
        while(r >= 0 && wt[r][1]+w[x][j][1] > s)r--;
        if(r < 0)break;
        if(z < wt[r][0]+w[x][j][0])z = wt[r][0]+w[x][j][0];
      }
      ans[i] = z;
    }
  }
  return ans.join("\n");
}