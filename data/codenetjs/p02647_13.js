function Main(input) {
 
	// 1行目がinput[0], 2行目がinput[1], …に入る
    input = input.split("\n");
  
    let N = parseInt(input[0].split(" ")[0]);
    let K = parseInt(input[0].split(" ")[1]);
    
    let d = input[1].split(" ").map(v => parseInt(v));
    
    for (let i = 1; i <= K; i++) d = make_d(d);
    
    console.log(d.join(" "));
}

function make_d(d){
    
    let b_i = (new Array(d.length)).fill(0);
        
    d.forEach((value, index) => {
        
        let d_min = index - value >= 0 ? index - value : 0;
        let d_max = index + value + 1;
        
        b_i[d_min] += 1;
        if (d_max < b_i.length) b_i[d_max] -= 1;
        
    });
    
    for(let i = 0; i < b_i.length; i++) if(0 < i) b_i[i] += b_i[i - 1];
    
    return b_i;
    
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));