function myout(text){console.log(text);}//standard output
function Main(input) {
	//input = parseInt(input);
	//input = input.trim().split(" ");
	input = input.trim().split("\n");
	//input = input.trim().split(" ").map((a)=>Number(a));
	//input = input.trim().split("\n").map((a)=>Number(a));
  var N = parseInt(input[0].split(" ")[0]);
  var M = parseInt(input[0].split(" ")[1]);
  var C = parseInt(input[0].split(" ")[2]);
  var bList = input[1].split(" ").map((a)=>Number(a));
  var output = 0;
  for(var i = 2; i <= N + 1; i++){
    var code = 0;
    var aList = input[i].split(" ").map((a)=>Number(a));
    for(var j = 0; j < aList.length; j++){
      code += aList[j] * bList[j];
    }
    code += C;
    if(code > 0){
       output++;
       }
  }
  myout(output);
  
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
