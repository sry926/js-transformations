function Main(input) {

	// 1行目がinput[0], 2行目がinput[1], …に入る
	input = input.split("\n");
    
    let x = parseInt(input[0].split(" ")[0]);
    let n = parseInt(input[0].split(" ")[1]);
    
    if (n == 0) {
        console.log(x);
        return;
    }
    
    let p_n = input[1].split(" ").map(Number);
    
    let buf = 0;
    
    for (let i = 0; ; i++) {
        
        let tmp = buf;
        
        if (p_n.indexOf(x + i) == -1) buf = x + i;
        
        if (p_n.indexOf(x - i) == -1) buf = x - i;
        
        if (tmp != buf) break;
        
    }
    
    console.log(buf);
    
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));