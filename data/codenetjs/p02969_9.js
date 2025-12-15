function main(input) {
  console.log(3*input*input);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));