function Main(input){
	input = input.split("\n");
	var mem = input[0].split(" ").map(Number);
	var arr = input[1].split(" ").map(Number);
	var max = 0;
	for(var i=1;i<arr.length;i++){
	    if(max<arr[i]-arr[i-1]) max = arr[i]-arr[i-1];
	}
	if(mem[0]-arr[arr.length-1]+arr[0]>max) max = mem[0]-arr[arr.length-1]+arr[0];
	console.log(mem[0]-max)
}Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
