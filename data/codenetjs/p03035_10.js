function main(input) {
  const [a, b] = input.trim().split(' ').map(x => parseInt(x));
  console.log( a >= 13 ? b : a >= 6 ? b / 2 : 0);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
