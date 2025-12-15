function main(input) {
  	var s = (input.split('o').length -1)*100+700
    console.log(s);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));