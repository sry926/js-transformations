var q = require("fs").readFileSync("/dev/stdin", "utf8").split(/\s+/).filter(x => x.length);
q.shift();
var a = q.map(x => +x);
var r = {};
// imos' method
for (var i = 1, l = a.length; i < l; i++) a[i] += a[i-1];
a.unshift(0);
// registration
for (var i = a.length; i--;) r[a[i]] = (r[a[i]] || 0) + 1;
// counting
var sum = 0;
Object.keys(r).forEach(key => sum += r[key] * (r[key] - 1) / 2);
console.log(sum);
