 function main(input) {
  const [src, target] = input.split('\n')  
  const result = String(src).split('').reverse().join('') === String(target) ? 'YES' : 'NO';
 
  console.log(result)
}
 
main(require('fs').readFileSync('/dev/stdin', 'utf8'))