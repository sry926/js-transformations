function Main(input) {
	input = parseInt(input.trim());
  var output = "Christmas";
  for(var i = 25; i > input; i--){
    output += " Eve";
  }
  console.log(output);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
