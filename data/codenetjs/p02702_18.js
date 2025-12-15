function main(lines) {
  const input = lines.split('\n')[0]
  let count = 0

  for(let i=0; i<input.length-3; i++){
    for(let j=i+3; j<=input.length; j++){
      let number = input.slice(i,j)%2019 
      if(number === 0){
        count++
      }
      if(number >= 200000){
        break;
      }
    }
  }
  console.log(count)

}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
