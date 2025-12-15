function Main(input) {
	var inputArr = input.split("\n");
	var n = parseInt(inputArr[0]);
	var a = inputArr[1].split(" ");
    var sum = 0;
    var count = 0;
    var in0 = false;
    var min = 9999999999;
  
    var obj = {};
	for (var i = 0; i < n ; i++) {
      var ai = Math.abs(a[i]);
      if (a[i] < 0) {
        count++;
      }
      if (a[i] === 0) {
        in0 = true;
      }
      if (ai < min) {
        min = ai;
      }
      sum = sum + ai;
    }
    if (count % 2 === 0 || in0 === true) {
        console.log(sum) ;
    } else {
        console.log(sum - min - min) ;
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));

