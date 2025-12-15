function main(arg) {
	arg = arg.split(' ');
  	var total = arg[0];
  	var tk = arg[1];
	var out = 'No';
  	if(total == tk) {
    	out = 'Yes';
    }
	console.log(out);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));