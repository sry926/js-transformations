function main(input) {
  const num = Number(input.split("\n")[0]);
  let ans = 1n;
  const numbers = input.split("\n")[1].split(" ").map(i => BigInt(i));
  
  if (numbers.includes(0n)) {
    return console.log(0);
  }
  
  for(let i=0; i < num; i++) {
  	ans *= numbers[i];
    if (ans > 10n**18n) {
      break;
    }
  }
  
  if (ans > 10n**18n) {
    console.log(-1);
  } else {
  	console.log(Number(ans));
  }
}
 
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
