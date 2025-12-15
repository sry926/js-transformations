function Main(input){
	for(let i = 111;i <= 999; i+=111){
  	if(input <= i)return i;	
  }
}

console.log(Main(require("fs").readFileSync("/dev/stdin", "utf8")));