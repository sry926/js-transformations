function main(input) {
   input = input.trim();
  const a = input.split(" ").map(Number);
 
 console.log(48-a[0]);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));