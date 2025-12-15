function main(input) {
  input = input.split('\n');
  let AC = 0;
  let WA = 0;
  let TLE = 0;
  let RE = 0;
  for (let i = 1;i <= input[0];i++) {
    switch (input[i]) {
      case 'AC':
        AC++;
        break;
      case 'WA':
        WA++;
        break;
      case 'TLE':
        TLE++;
        break;
      case 'RE':
        RE++;
        break;
     }
  }
  console.log('AC x ' + AC);
  console.log('WA x ' + WA);
  console.log('TLE x ' + TLE);
  console.log('RE x ' + RE);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));