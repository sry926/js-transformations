"use strict";
var GET=(function(){function f(s){return new g(s);}function g(s){this._s=s.trim().split("\n");this._y=0;}g.prototype.a=function(f){var s=this._s, y=this._y, r;if(typeof s[y]==="string")s[y]=s[y].split(" ").reverse();r=s[y].pop();if(!s[y].length)this._y++;return f?r:+r;};g.prototype.l=function(f){var s=this._s[this._y++].split(" ");return f?s:s.map(a=>+a);};g.prototype.m=function(n,f){var r=this._s.slice(this._y,this._y+=n).map(a=>a.split(" "));return f?r:r.map(a=>a.map(a=>+a));};g.prototype.r=function(n,f){var r=this._s.slice(this._y,this._y+=n);return f?r:r.map(a=>+a);};return f;})();
var o=GET(require("fs").readFileSync("/dev/stdin","utf8"));
function xArray(v){var a=arguments,l=a.length,r="Array(a["+--l+"]).fill(0).map(x=>{return "+v+";})";while(--l)r="Array(a["+l+"]).fill(0).map(x=>"+r+")";return eval(r);}

console.log(main());
function main(){
  var n = o.a();
  var k = o.a();
  var a = o.l().sort((a,b)=>a-b);
  var f = o.l().sort((a,b)=>b-a);
  var ok = 1e12, ng = -1;
  while(ok-ng > 1){
    var m = Math.floor((ok+ng)/2);
    var cnt = 0;
    for(var i = 0; i < n && cnt <= k; i++){
      if(a[i]*f[i] <= m)continue;
      var b = Math.floor(m/f[i]);
      cnt += a[i]-b;
    }
    if(cnt <= k)ok = m;
    else ng = m;
  }
  return ok;
}