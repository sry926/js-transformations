function Main(input) {
  input = input.split("\n");
  var N = input[0];
  var A = input[1];
  var num = Math.floor(N / 500);
  var num2 = num * 500;
  var x = N - num2;
  var result = null;
  if (x < A) {
    result = 'Yes';
  } else if (N < A) {
    result = 'Yes';
  } else {
    result = 'No';
  }
  console.log(result);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
