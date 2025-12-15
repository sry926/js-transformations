function Main(input) {
	input = input.split("\n");
	tmp = input[0].split(" ");
  
	var tmp2 = [1,2,3,4,5];
	
	for (var i = 0; i < 5; i++) {
	if (tmp[i] != tmp2[i]) {
	var result = i + 1;
	break;
	} else {
	}
    }
	console.log(result);
	}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));