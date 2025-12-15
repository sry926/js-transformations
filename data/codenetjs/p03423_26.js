function main(input) {
  const n = parseInt(input, 10);
  
  console.log(Math.floor(n / 3));
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));