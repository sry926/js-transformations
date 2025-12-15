"use strict";
function I(t,i){this._s=t.split("\n"),this._c=0,this._l=0,this._f=i||Number}I.prototype.a=function(t){var i=this._s[this._l];if(i){var s=i.trim().split(" "),h=s[this._c];return this._c++,s.length===this._c&&(this._c=0,this._l++),t?t(h):this._f(h)}},I.prototype.l=function(t){var i=this._s[this._l];if(i)return this._c=0,this._l++,i.split(" ").map(t||this._f)},module.exports=I;

function main(input) {
  var o = new I(input);

  var n = o.a();
  var m = o.a();
  var a = o.l();

  var arr = [];
  for (var i = 0; i < m; i++) {
    var b = o.a();
    var c = o.a();
    arr.push({b, c});
  }

  a.sort((a, b) => a - b);
  arr.sort((a, b) => a.c - b.c);

  var ans = [];
  while (ans.length < n) {
    var lastA = a[a.length - 1];
    var lastB = 0;
    if (arr.length > 0) {
      lastB = arr[arr.length - 1].c;
    }
    if (lastA >= lastB) {
      // console.log("A", {lastA})
      ans.push(lastA);
      a.pop();
    } else {
      // console.log("B", arr[arr.length - 1]);
      for (var j = 0; j < arr[arr.length - 1].b; j++) {
        ans.push(lastB);
      }
      arr.pop();
    }
  }

  console.log(ans.slice(0, n).reduce((acc, cur) => acc + cur));
}


main(require("fs").readFileSync("/dev/stdin", "utf8"));
