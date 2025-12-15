function myout(text){console.log(text);}//standard output
function Main(input) {
	input = parseInt(input);
	//input = input.trim().split(" ");
	//input = input.trim().split("\n");
	//input = input.trim().split(" ").map((a)=>Number(a));
	//input = input.trim().split("\n").map((a)=>Number(a));
  var output = 1000000000;
  for(var i = 1; i < input; i++){
    var a = i.toString().split("");
    var b = (input - i).toString().split("");
    var tmp = 0;
    var c = a.concat(b).map((a)=>Number(a));
    for(var j = 0; j < c.length; j++){
      tmp += c[j];
    }
    output = Math.min(output, tmp);
  }
  myout(output);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
