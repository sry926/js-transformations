// Atcoder150 - B
function main(input) {
  const inputs = input.split('\n');
  let n = parseInt(inputs[0], 10);
  let s = inputs[1];

  s += 'X' + 'X';
  let sArr = Array.from(s);

  let counter = 0;
  for (let i = 0; i < sArr.length - 2; i++) {
    if (sArr[i] === 'A') {
      counter += sArr[i + 1] === 'B' && sArr[i + 2] === 'C' ? 1 : 0;
    }
  };
  console.log(counter);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
