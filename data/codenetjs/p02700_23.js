function main(input) {
  const i = input.split(' ');
  let tHealth = parseInt(i[0]);
  let tStrength = parseInt(i[1]);
  let aHealth = parseInt(i[2]);
  let aStrength = parseInt(i[3]);
  while (tHealth > 0 && aHealth > 0) {
  	aHealth -= tStrength;
    if (aHealth <= 0) break;
    tHealth -= aStrength;
    if (tHealth <= 0) break;
  }
  if (tHealth > 0) console.log('Yes');
  else console.log('No');
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));