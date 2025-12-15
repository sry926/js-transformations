  function Main(input) {
  	input = input.split(" ");
    var K = parseInt(input[0]);
    var X = parseInt(input[1]);
    if(K == 1) {
      console.log(X);
      return;
    }
    var start = X - K + 1;
    var end = X + K - 1;
    var output = "";
    for(start; start <= end; start++){
      output += start + " ";
    }
    console.log(output);
  }
  Main(require("fs").readFileSync("/dev/stdin", "utf8"));
