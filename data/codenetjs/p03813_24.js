function main(input) {
  input=input.trim();
  const x = parseInt(input.split(" ")[0], 10);
  if(x<1200){
    console.log("ABC");
  }else{
    console.log("ARC");
  }
}



main(require('fs').readFileSync('/dev/stdin', 'utf8'));