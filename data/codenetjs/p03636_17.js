function main(input) {
  const s = input.split('');
  
  const a = s[0].toString();
  const b = (s.length - 2).toString();
  const c = s[s.length - 1];
  
  let result = a + b + c;
  
  console.log(result);
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'));