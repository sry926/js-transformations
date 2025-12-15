(function main() {
  var n = Number(require('fs').readFileSync('/dev/stdin', 'utf8'));
  var cache = [1, 1];
  var fib = (n) => cache[n] || (cache[n] = fib(n - 1) + fib(n - 2));
  console.log(fib(n));
})();

