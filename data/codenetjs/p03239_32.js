function Main(input) {
	input = input.trim().split("\n");
  var N = parseInt(input[0].split(" ")[0]);
  var T = parseInt(input[0].split(" ")[1]);
  input.shift();
  var notTLE = [];
  for(var i = 0; i < N; i++){
    var tmp1 = parseInt(input[i].split(" ")[0]);
    var tmp2 = parseInt(input[i].split(" ")[1]);
    if(tmp2 <= T){
       notTLE.push(tmp1);
    }
  }
  if(notTLE.length == 0){
     console.log("TLE");
     }else{
       console.log(Math.min.apply(null,notTLE));
     }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
