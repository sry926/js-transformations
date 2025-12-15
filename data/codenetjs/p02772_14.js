function main(input){

  	var document = input[0].split(/\r\n/);
	document = input[1].split(' ');
	var ary = document.filter(
		function(e) {
    		return e != ' '
    	}
    )

	var num = ary.map( str => parseInt(str, 10) );
  	var result = 'APPROVED';
 	for (var i = 0; i < num.length; i++) {
    	if (num[i]%2 === 0) {
        	if(!(num[i]%3 === 0 || num[i]%5 === 0)) {
            	result = 'DENIED';
            }
        }
    }
	console.log(result);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8').split("\n"))