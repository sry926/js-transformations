function main(input) {
	var result = Range(parseInt(input,10))
		.filter(function(v){
			return ((v % 3 === 0) || (v % 10 === 3));
		});
	if (result.length !== 0){
		console.log(' ' + result.join(' '));
	} else {
		console.log('');
	}
}

function Range(num) {
	var result = [];
	for (var i = 1; i <= num; i++)
		result.push(i);
	return result;
}

var
input = '';

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk) {
  input += chunk;
});
process.stdin.on('end', function() {
  main(input.split('\n'));
});