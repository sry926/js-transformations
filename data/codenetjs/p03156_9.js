function Main(input){
	input = input.split("\n");
	var mem = input[1].split(" ").map(Number)
	var a = mem[0];
	var b = mem[1];
	var sum = [0,0,0];
	var arr = input[2].split(" ").map(Number);
	for(var i=0;i<arr.length;i++){
		if(arr[i]<=a){
			sum[0]++;
		}else if(arr[i]<=b){
			sum[1]++;
		}else{
			sum[2]++;
		}
	}
			console.log(Math.min.apply(null,sum));
}Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());