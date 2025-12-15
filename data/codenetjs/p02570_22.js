function Main(input) {
  input = input.split(" ");
  const D = parseInt(input[0], 10);
  const T = parseInt(input[1], 10);
  const S = parseInt(input[2], 10);

  var time = ( D / S <= T ) ?  'Yes' : 'No';
  console.log(time);
  
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));