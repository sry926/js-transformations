function Main(input) {
  var tmp = input.split(' ');
  var N = parseInt(tmp[0], 10);
  var L = parseInt(tmp[1], 10);
  var leastAbsTaste = Math.abs(L) + N;
  var pieTaste = 0;
  for(var i = 1; i <= N; i++) {
    var taste = L + i - 1;
    if ( Math.abs(taste) < Math.abs(leastAbsTaste)) {
      leastAbsTaste = taste;
    }
    pieTaste += taste;
  }
  pieTaste -= leastAbsTaste;
  console.log(pieTaste);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));