function main(input) {
  const args = input.split(' ').map(n => parseInt(n, 10));
  const N = args[0];
  const loop = args[1];
  
  console.log((N - loop) + 1);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));