function Main(input) {
 input = input.split(" ");
 var A = parseInt(input[0], 10);
 var B = parseInt(input[1], 10);
 var result = (A,B) => {
  if ( A+B > A-B) {
		if (A+B > A*B) {
 			console.log(A+B);
    } else {
    	console.log(A*B);
    }
  } else {
  	  if (A-B > A*B) {
				console.log(A-B);
   	 } else {
				console.log(A*B);
     }
	}
 };
  result(A,B);
};

Main(require("fs").readFileSync("/dev/stdin", "utf8"));