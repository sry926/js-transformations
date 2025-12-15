function main(input){
    input = input.split(' ');
    var K = parseInt(input[0], 10);
    var S = parseInt(input[1], 10);

    var ans = 0;
    for(var x = 0;x <= K; x++)
	for (var y = 0;y <= K; y++){
	    z = S - (x + y)
	    if ( z >= 0 && z <= K ) ans++
	}
    console.log(ans);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
