function main(input) {
  var num = parseInt(input, 10);
  
  for(var i=1; i <= num; i++){
    if(i < 10){
      console.log(i);
    }
    else console.log(9 + (i-10+1)*10);
  }
}
 
main(require('fs').readFileSync('/dev/stdin', 'utf8'));