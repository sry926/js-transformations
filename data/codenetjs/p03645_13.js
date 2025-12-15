function Main(input) {
  	input = input.trim();
	var N = input.split("\n")[0].split(" ")[0];
  	var M = input.split("\n")[0].split(" ")[1];
  	var oneList = [];//1から行けるところのリスト
  	var NList = [];//Nから行けるところのリスト
  for(var i = 1; i <= M; i++){
    var tmp = input.split("\n")[i].split(" ");
    if(tmp[0] == "1"){
       oneList.push(tmp[1]);
    }
    if(tmp[1] == N){
       NList.push(tmp[0]);
    }  
  }
  if(oneList.length == 0 || NList.length == 0){
     console.log("IMPOSSIBLE");
  }else{
    var check = oneList.concat(NList);
    check = check.filter(function (x, i, self) {
            return self.indexOf(x) === i && i !== self.lastIndexOf(x);
        });
    console.log((check.length != 0) ? "POSSIBLE" : "IMPOSSIBLE");
  }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
