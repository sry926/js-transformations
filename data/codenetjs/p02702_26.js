function main(lines) {
  const input = lines.split('\n')[0]
  let count = 0

  for(let i=0; i<input.length-3; i++){
    for(let j=i+4; j<=input.length; j++){
      let number = input.slice(i,j) 

      if(String(number).length > 6){
        break;
      }
      if(number%2019 === 0){
        count++
        break;
      }

    }
  }
  console.log(count)

}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
