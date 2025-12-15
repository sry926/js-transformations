function myout(text){console.log(text);}//standard output
function Main(input) {
	//input = parseInt(input);
	//input = input.split(" ");
	//input = input.split("\n");
	//input = input.split(" ").map((a)=>Number(a));
	//input = input.split("\n").map((a)=>Number(a));
  var output = 0;
  var count = 0;
  for(var i = 0; i < input.length; i++){
    var tmp = input.slice(i,i+1);
    if(tmp == "B"){
       count++;
    }else{
      output += count;
    }
  }
  myout(output);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
