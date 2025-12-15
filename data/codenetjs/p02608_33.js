function Main(input) {
	n = input
	for (i=1;i<=(n);i++){
		var cnt=0;
		for (x=1; x <= 100; x++){
			for (y=1; y<=100; y++){
				for (z=1; z<=100; z++){
					var eq = x**2 + y**2 + z**2 + x*y + y*z + z*x;
					if (eq === i){
						cnt++;
					}
				}
			}
		}
		console.log(cnt)
	}

}


// var input = "20";

// Main(input);

// *この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
