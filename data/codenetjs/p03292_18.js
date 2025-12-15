function Main(input){
	function compareFunc(a,b){
    	return a - b;
    }
    input = input.trim().split(' ');
    input.sort(compareFunc);
    a = input[1]-input[0];
    b = input[2]-input[1];
    ans = a + b;
    console.log(ans);
}

Main(require("fs").readFileSync("/dev/stdin","utf8"));