(function(stdin){
	var lines = stdin.toString().split('\n')[0].split(' ').map(Number);
	var a = lines[0];
	var b = lines[1];
	if(a > b){
		console.log("a > b");
	}else if(a < b){
		console.log("a < b");
	}else{
		console.log("a == b");
	}
	
}(require('fs').readFileSync('/dev/stdin','utf8')));