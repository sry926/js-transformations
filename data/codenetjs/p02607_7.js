function Main(input) {
  
	readlines = input.split("\n");
	var n = readlines[0];
	var a = readlines[1].split(" ").map(Number);
	var ans = 0;
	for(let i = 0; i < n; i++){
	  if(i % 2 === 0 && a[i] % 2 === 1){
	    ans++;
	  }
	}
	
	console.log(ans);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
