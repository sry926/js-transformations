function main(input){
	var count = 0;
    for ( n of input ) {
      if (n == 'o') count++;
    }
	console.log(count*100+700);  
}
main(require('fs').readFileSync('/dev/stdin', 'UTF-8'));