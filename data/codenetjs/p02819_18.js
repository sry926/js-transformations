function main(input) {
  if (input == 2 || input == 3) {
    console.log(input);
    return;
  }

  var base = Math.floor(
    (parseInt(input.trim()) + 1) / 6
  ) * 6;
  while (true) {
    if (isPrime(base - 1) && base - 1 >= input) {
      console.log(base - 1)
      break;
    }

    if (isPrime(base + 1) && base + 1 >= input) {
      console.log(base + 1)
      break;
    }
    base += 6;
  }
}
function isPrime(n) {
  for (var i = Math.floor(Math.sqrt(n)); i <= Math.floor(n / 2); i++) {
    if (n % i == 0) return false;
  }
  return true;
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));

