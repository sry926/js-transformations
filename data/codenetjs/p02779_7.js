function Main(input) {
	var str = input;
	var ans = "YES";
	var c = 0;
	str = str.split("\n");
	var l = str[1].split(" "); 
	var len = l.length;
	loop:
	for(var j =0;j< len -1;j++){	
 		for(var i =1; i<len;i++){
 			 if(l[j]==l[i+c]){
	 			ans = "NO";
	 			break loop;
 			}	 	
 		}
 		c++;
	} 	
	console.log(ans);
}
 //*おまじない
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
