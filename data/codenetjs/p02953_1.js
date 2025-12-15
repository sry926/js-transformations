function Main(input) {
	var idata = input.split(/\s|\n/);
	var ndata = [];
	var datasuu = parseInt(idata[0]);
	for(k=1;k<idata.length;k++){
		ndata.push(parseInt(idata[k]));
	}
	//右から順番に比較していって、もし左＞右なら左を一個下げる
	for(i=1;i<datasuu;i++){
		if(ndata[datasuu-i-1]>ndata[datasuu-i]){
			ndata[datasuu-i-1]-=1;
		}
	}
	//新しいものが本当に改善しているか確かめる
	for(j=1;j<datasuu;j++){
		if(ndata[j-1]>ndata[j]){
			return console.log("No");
		}
	}
	return console.log("Yes");
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));