function main(input) {
  const inputs = input.trim().split('\n');
  var K = inputs[0] - 0;
  var S = inputs[1];

  if (S.length <= K) {
    console.log(S);
  } else {
    console.log(S.slice(0, K) + '...');
  }
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
