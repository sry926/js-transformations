function Main(input) {
   	var inputArray = input.split("\n");
	var X=inputArray[0];
	
	var amari=X%100;
	var kaisu=0;
	
	for(var i=5;i>=1;i--){
		kaisu=kaisu+parseInt(amari/i);
		amari=amari%i;
		//console.log(i);
	}
	
	if(kaisu<=parseInt(X/100)){
		console.log("1");
	}else{
		console.log("0")
	}
}
     
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
