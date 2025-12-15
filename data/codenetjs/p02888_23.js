var GET = (function () {function f(s) {return new g(s);}function g(s) {this._s = s.trim().split("\n");}g.prototype.getValue = function (n) {return this._s[n];};g.prototype.getArray = function (n) {return this.stoa(this._s[n]);};g.prototype.slice = function (s, limit) {return this._s.slice(s, +limit + s || undefined).map(v => this.stox(v));};g.prototype.sliceArray = function (s, limit) {return this._s.slice(s, +limit + s || undefined).map(v => this.stoa(v));};g.prototype.stoa = function (s) {return s.split(" ").map(v => this.stox(v));};g.prototype.stox = function (v) {var i = +v;return (i === i) ? i : v;};return f;})();
var o = GET(require("fs").readFileSync("/dev/stdin", "utf8"));

console.log(main());
function main(){
    var N = o.getValue(0);
    var Ls = o.getArray(1);

    var sorted = Ls.sort();

    var result = 0;
    for(var i = 0; N - 2> i; i++) {
        for (var j = i + 1; N - 1> j; j++) {
            var ab = sorted[i] + sorted[j];
            var index = lower_bound(sorted, ab);

            if (j < index - 1) {
                result += index - 1 -j
            }
        }
    }

    return result;
}

function lower_bound(arr, n) {
    var first = 0, last = arr.length - 1, middle;
    while (first <= last) {
        middle = 0 | (first + last) / 2;
        if (arr[middle] < n) first = middle + 1;
        else last = middle - 1;
    }
    return first;
};