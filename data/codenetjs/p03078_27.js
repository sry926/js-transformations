function Main(input){
  var data = input.split("\n");
  var x = data[0].split(" ")[0];
  var y = data[0].split(" ")[1];
  var z = data[0].split(" ")[2];
  var k = data[0].split(" ")[3];
  var yummy = [];
  var aList = data[1].split(" ").sort((a, b)=>b-a);
  var bList = data[2].split(" ").sort((a, b)=>b-a);
  var cList = data[3].split(" ").sort((a, b)=>b-a);
  for(var a=0; a<Math.min(x, k); a++){
  	for(var b=0; b<Math.min(y, k); b++){
  	  for(var c=0; c<Math.min(z, k); c++){
  		yummy.push(Number(aList[a])+Number(bList[b])+Number(cList[c]));
	  }
  	}
  }
  yummy.sort((a, b)=>b-a);
  for(var i=0; i<k; i++){
  	console.log(yummy[i]);
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));