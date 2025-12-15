var g=[1,2,4,8,16,32,64,128,512];
process.stdin.on("data",function(c){
	(c+"").trim().split("\n").some(function(n){
		var a=[],l=10;
		while(l--){
			(n>=g[l])&&(n-=g[l],a.unshift(g[l]));
		}
		console.log(a.join(" "));
	});
}).resume();