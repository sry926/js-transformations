function Main(input) {
	var inputArr = input.split("");
    var odd0  = 0;
    var odd1  = 0;
    var even0 = 0;
    var even1 = 0;
	for(var i = 0; i <= inputArr.length; i = i + 2) {
      if (inputArr[i] === '0') {
          even0++;
      } else {
          even1++;
      }
	}
	for(var i = 1; i <= inputArr.length; i = i + 2) {
      if (inputArr[i] === '0') {
          odd0++;
      } else {
          odd1++;
      }
	}

    if ((even0 + odd1) > (even1 + odd0) ) {
    	console.log(even1 + odd0);
    } else {
      	console.log(even0 + odd1);
    }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));