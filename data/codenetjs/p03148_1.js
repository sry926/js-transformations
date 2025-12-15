var GET=(function(){function f(s){return new g(s);}function g(s){this._s=s.trim().split("\n");this._y=0;}g.prototype.a=function(f){var s=this._s, y=this._y, r;if(typeof s[y]==="string")s[y]=s[y].split(" ").reverse();r=s[y].pop();if(!s[y].length)this._y++;return f?r:+r;};g.prototype.l=function(f){var s=this._s[this._y++].split(" ");return f?s:s.map(a=>+a);};g.prototype.m=function(n,f){var r=this._s.slice(this._y,this._y+=n).map(a=>a.split(" "));return f?r:r.map(a=>a.map(a=>+a));};g.prototype.r=function(n,f){var r=this._s.slice(this._y,this._y+=n);return f?r:r.map(a=>+a);};return f;})();
var o=GET(require("fs").readFileSync("/dev/stdin","utf8"));

console.log(main());
function main(){
  var n = o.a();
  var k = o.a();
  var t = o.m(n);
  t.sort((a,b)=>b[1]-a[1]);
  var a = Array(n+1).fill(0);
  var b = Array(n+1).fill(0);
  var c = 0;
  var ans = 0;
  for(var i = 0; i < n; i++){
    var x = t[i];
    if(a[x[0]] === 0){
      c++;
      ans += x[1];
      a[x[0]] = 1;
      b[i] = 1;
      if(c === k)break;
    }
  }
  var d = c;
  i = -1;
  while(d < k){
    if(b[++i] === 1)continue;
    d++;
    ans += x[i][1];
    b[i] = 1;
  }
  var s = ans;
  ans += c*c;
  var l = 0, r = n-1;
  while(l < r){
    while(b[l] === 1 && l < n)l++;
    while(b[r] === 0 && r >= 0)r--;
    if(l >= r || r < 0 || l >= n)break;
    c--;
    s += t[l][1] - t[r][1];
    if(s + c*c > ans)ans = s + c*c;
    l++; r--;
  }
  return ans;
}