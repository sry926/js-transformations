function Main(input) {
  var a = input.split('').map(n => parseInt(n, 10));
    if(a[0]==9 || a[1]==9) {
      console.log('Yes');

    } else {
      console.log('No');
    }
 }
  Main(require('fs').readFileSync('/dev/stdin', 'utf8'));