function main(input) {
  input=input.trim();
  const n = parseInt(input.split(" ")[0], 10);
  const m = parseInt(input.split(" ")[1], 10);
  console.log((n-1)*(m-1));
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));