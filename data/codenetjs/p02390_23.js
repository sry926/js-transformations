(stdin => {
  // Define Function
  // const cube = n => Math.pow(n, 2)
  // Declare Variable
  const inputs = stdin.toString().trim().split('\n')
  const x = parseInt(inputs[0], 10)
  const time =parseInt(x/(60*60))
  const hun= parseInt((x%3600)/60)
  const byo=parseInt(x%60)
  


  console.log(`${time}:${hun}:${byo}`)


 
})(require('fs').readFileSync('/dev/stdin', 'utf8'))
