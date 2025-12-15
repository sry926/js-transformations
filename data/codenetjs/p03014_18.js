var GET=(function(){function f(s){return new g(s);}function g(s){this._s=s.trim().split("\n");this._y=0;}g.prototype.a=function(f){var s=this._s, y=this._y, r;if(typeof s[y]==="string")s[y]=s[y].split(" ").reverse();r=s[y].pop();if(!s[y].length)this._y++;return f?r:+r;};g.prototype.l=function(f){var s=this._s[this._y++].split(" ");return f?s:s.map(a=>+a);};g.prototype.m=function(n,f){var r=this._s.slice(this._y,this._y+=n).map(a=>a.split(" "));return f?r:r.map(a=>a.map(a=>+a));};g.prototype.r=function(n,f){var r=this._s.slice(this._y,this._y+=n);return f?r:r.map(a=>+a);};return f;})();
var o=GET(require("fs").readFileSync("/dev/stdin","utf8"));
function xArray(v){var a=arguments,l=a.length,r="Array(a["+--l+"]).fill(0).map(x=>{return "+v+";})";while(--l)r="Array(a["+l+"]).fill(0).map(x=>"+r+")";return eval(r);}

console.log(main());
function main(){
  var h = o.a();
  var w = o.a();
  var s = o.r(h,1);
  var x = xArray(0,h,w);
  var y = xArray(0,h,w);
  for(var i = 0; i < h; i++){
    var u = 0;
    for(var j = 0; j < w; j++){
      if(s[i][j] === "#"){
        for(var k = 1; k <= u; k++){
          x[i][j-k] = u;
        }
        u = 0;
      }else{
        u++;
      }
    }
    for(var k = 1; k <= u; k++){
      x[i][w-k] = u;
    }
  }
  for(var j = 0; j < w; j++){
    var u = 0;
    for(var i = 0; i < h; i++){
      if(s[i][j] === "#"){
        for(var k = 1; k <= u; k++){
          y[i-k][j] = u;
        }
        u = 0;
      }else{
        u++;
      }
    }
    for(var k = 1; k <= u; k++){
      y[h-k][j] = u;
    }
  }
  var ans = 0;
  for(var i = 0; i < h; i++){
    for(var j = 0; j < w; j++){
      var t = x[i][j] + y[i][j];
      if(ans < t)ans = t;
    }
  }
  return ans-1;
}