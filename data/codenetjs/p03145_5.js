function main(input){
  const AB=parseInt(input.split(" ")[0],10);
  const BC=parseInt(input.split(" ")[1],10);
  const CA=parseInt(input.split(" ")[2],10);
  console.log(AB*BC/2);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));