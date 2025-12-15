function main(input) {
  var args = input.split('\n');
  var k = args[0].split(' ')[1];
  var s = args[1].split('');
  
  s[k - 1] = s[k - 1].toLowerCase();
  s = s.join('');
  console.log(s);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
