function main(input){
  const args = input.split(' ');
  const k = parseInt(args[0],10);
  const x = parseInt(args[1],10);
  
  if(500 * k >= x){
    console.log('Yes');

  }
  else{
    console.log('No');

  }
}

main(require('fs').readFileSync('/dev/stdin','utf8'));