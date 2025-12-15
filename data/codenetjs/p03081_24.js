"use strict";
function I(s,f){this._s=s.split("\n");this._c=0;this._l=0;this._f=f||Number}I.prototype.a=function(){var l=this._s[this._l];if(!l)return;var t=l.trim().split(" ");var a=t[this._c];this._c++;if(t.length===this._c){this._c=0;this._l++}return this._f(a)};I.prototype.l=function(){var l=this._s[this._l];if(!l)return;this._c=0;this._l++;return l.split(" ").map(this._f)};

function main(input) {
  const o = new I(input, String);

  const N = Number(o.a());
  const Q = Number(o.a());
  const s = o.a();
  const t = [];
  const d = [];

  for (let i=0; i<Q;i++) {
    t.push(o.a());
    d.push(o.a());
  }

  function testStatus(index) {
    let currentIndex = index;
    let currentChar = s[currentIndex];
    for ( let i = 0; i < Q; i++) {
      if (t[i] === currentChar) {
        if (d[i] === 'L') {
          currentIndex -= 1;
          if (currentIndex < 0) return "LDis";
          currentChar = s[currentIndex];
        } else {
          currentIndex += 1;
          if (currentIndex >= N) return "RDis";
          currentChar = s[currentIndex];
        }
      }
    }

    return 'Alive';
  }

  let leftDis = 0;
  let LHead = 0;
  let LTail = N - 1;
  if (testStatus(LTail) === "LDis") {
    leftDis = N;
  } else if (testStatus(LHead) === "LDis") {
    let middle = Math.floor((LHead + LTail)/2);
    while (LHead < LTail - 1) {
      if (testStatus(middle) === "LDis") {
        LHead = middle;
      } else {
        LTail = middle;
      }

      middle = Math.floor((LHead + LTail)/2);
    }
    leftDis = middle + 1;
  }

  let rightDis = 0;
  let RHead = 0;
  let RTail = N - 1;
  if (testStatus(RHead) === "RDis") {
    rightDis = N;
  } else if (testStatus(RTail) === "RDis") {
    let middle = Math.floor((RHead + RTail)/2);
    while (RHead < RTail - 1) {
      if (testStatus(middle) === "RDis") {
        RTail = middle;
      } else {
        RHead = middle;
      }

      middle = Math.floor((RHead + RTail)/2);
    }

    rightDis = N - middle - 1;
  }
  console.log(N - leftDis - rightDis);
}


main(require("fs").readFileSync("/dev/stdin", "utf8"));
