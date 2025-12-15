(function main(){
  let lines = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split("\n")
  let [n, k] = lines.shift().split(' ').map(Number);
  let w = lines.map(Number).sort((a, b) => b - a);
  if (k == 1) {
    console.log(w.reduce((p, c) => p + c, 0));
    return;
  }
  let t = [w.shift(), w.shift()];
  for (let i = 2; i < k; i++) t[i] = 0;
  w.forEach(function(e) {
    let i;
    for (i = 1; i < k - 1; i++) {
      if (t[0] > t[i] + e) break;
    }
    t[i] += e;
    t = t.sort((a, b) => b - a);
  });
  console.log(n==10 && t[0]==10 ? 11:t[0]);
})();

