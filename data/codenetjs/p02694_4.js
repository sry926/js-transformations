function main(input) {
  input = input.split('\n');
  const first = input[0];

  let year = 1;
  let stock = 100;
  while (year < (10 ** 18)) {
    stock += Math.floor(stock * 0.01)
    if (stock >= first) {
      console.log(year)
      break
    }

    year++;
  }
  return;
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
