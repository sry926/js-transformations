function Main(input){
	input = input.split("\n");
	var arr = input[1].split("");
	var n = input[0]-0;
	var rgb = [0,0,0];
	for(var i=0;i<arr.length;i++){
		switch(arr[i]){
			case "R":
			rgb[0]++;
			break;
			case "G":
			rgb[1]++;
			break;
			case "B":
			rgb[2]++;
			break;
		}
	}
	var sum = rgb[0]*rgb[1]*rgb[2];

	for(i=1;i<=n;i++){
		for(var j=i;j<arr.length-i+1;j++){
			var p = [];
			p.push(arr[j]);
			p.push(arr[j-i]);
		    p.push(arr[j+i]);
		    p=p.sort();
		    //console.log(p)
			if(p[0]=="B"&&p[1]=="G"&&p[2]=="R") sum--;
		}
	}
	console.log(sum);
}Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());