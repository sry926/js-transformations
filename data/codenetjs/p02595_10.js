function main(input) {
  let args = input.split('\n');
  let count = 0;
  for (let i = 1;i < args.length;i++) {
    let x = args[i].split(' ')[0];
    let y = args[i].split(' ')[1];
    if (Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) <= args[0].split(' ')[1]) {
      count++;
    }
  }
  console.log(count);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));