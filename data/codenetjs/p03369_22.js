function main(input) {
  const toppingCount = input.split('o').length - 1;
  console.log(700 + 100 * toppingCount);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));