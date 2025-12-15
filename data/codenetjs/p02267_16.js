var countCommonNumber = function(n, s, q, t) {
  var counter = 0;
  for (var i = 0; i < q; i += 1) {
    for (var j = 0; j < n; j += 1) {
      if (t[i] === s[j]) {
        counter += 1;
        break;
      }
    }
  }
  return counter;
};

(function(stdin) {
  var line = stdin.split('\n');
  var n = parseInt(line[0], 10);
  var s = line[1].split(' ').map(Number);
  var q = parseInt(line[2], 10);
  var t = line[3].split(' ').map(Number);
  console.log(countCommonNumber(n, s, q, t));
})(require('fs').readFileSync('/dev/stdin', 'utf8'));